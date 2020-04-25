import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categorie: any = {};

  constructor(public api: RestApiServiceCategories,
  public loadingController: LoadingController,
  public route: ActivatedRoute,
  public router: Router) { }


  async getCategories() {
  const loading = await this.loadingController.create();
  await loading.present();
  await this.api.getCategoriesById(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      console.log(res);
      this.categorie = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

async delete(id) {
  const loading = await this.loadingController.create();
  await loading.present();
  await this.api.deleteCategories(id)
    .subscribe(res => {
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

  ngOnInit() {
  this.getCategories();
}

}
