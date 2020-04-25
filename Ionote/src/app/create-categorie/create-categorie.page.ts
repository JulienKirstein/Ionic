import { LoadingController } from '@ionic/angular';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.page.html',
  styleUrls: ['./create-categorie.page.scss'],
})
export class CreateCategoriePage implements OnInit {

  categorieForm: FormGroup;

  constructor(public api: RestApiServiceCategories,
  public loadingController: LoadingController,
  private route: ActivatedRoute,
  public router: Router,
  private formBuilder: FormBuilder) {
  this.categorieForm = this.formBuilder.group({
    'name' : [null, Validators.required],
  });
  }

async CreateCategories(){
  await this.api.postCategories(this.categorieForm.value)
  .subscribe(res => {
      this.router.navigate(['/categories']);
    }, (err) => {
      console.log(err);
    });
}

  ngOnInit() {
  }

}
