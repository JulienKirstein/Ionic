import { LoadingController } from '@ionic/angular';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy  {

    navigationSubscription;
    categories: any;

    constructor(public api: RestApiServiceCategories, public loadingController: LoadingController, private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
         if (e instanceof NavigationEnd) {
           this.initialiseInvites();
         }
        });
    }

    initialiseInvites() {
    this.getCategories();
    }

    ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
    }

    ngOnInit() {
    this.getCategories();
    }

    async getCategories() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }
}