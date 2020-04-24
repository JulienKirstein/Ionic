import { LoadingController } from '@ionic/angular';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

    categories: any;

    constructor(public api: RestApiServiceCategories, public loadingController: LoadingController) { }

    ngOnInit() {
    console.log("List page");
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