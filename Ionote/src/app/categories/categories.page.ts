import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

    classrooms: any;

    constructor(public api: RestApiService, public loadingController: LoadingController) { }

    ngOnInit() {
    console.log("List page");
    this.getClassrooms();
    }

    async getClassrooms() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.classrooms = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }
}