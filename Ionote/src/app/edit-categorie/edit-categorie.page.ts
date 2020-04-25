import { LoadingController } from '@ionic/angular';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.page.html',
  styleUrls: ['./edit-categorie.page.scss'],
})
export class EditCategoriePage implements OnInit {

  categorieForm: FormGroup;

  constructor(public api: RestApiServiceCategories,
  public loadingController: LoadingController,
  private route: ActivatedRoute,
  public router: Router,
  private formBuilder: FormBuilder) {
  this.getCategories(this.route.snapshot.paramMap.get('id'));
  this.categorieForm = this.formBuilder.group({
    'name' : [null, Validators.required],
  });
  }



  async getCategories(id) {
  const loading = await this.loadingController.create();


  await this.api.getCategoriesById(id).subscribe(res => {
    this.categorieForm.controls['name'].setValue(res.name);
    });
  }





async updateCategories(){
  await this.api.updateCategories(this.route.snapshot.paramMap.get('id'), this.categorieForm.value)
  .subscribe(res => {
      let id = res['id'];
      this.router.navigate(['/categorie', JSON.stringify(id)]);
    }, (err) => {
      console.log(err);
    });
}

  ngOnInit() {
  }

}
