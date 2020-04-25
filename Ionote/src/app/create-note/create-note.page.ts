import { LoadingController } from '@ionic/angular';
import { RestApiServiceNotes } from '../rest-api-notes.service';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss'],
})
export class CreateNotePage implements OnInit {

  noteForm: FormGroup;
  categories: any;
  id_name: any;

  constructor(public api: RestApiServiceNotes,
  public apiCategories: RestApiServiceCategories,
  public loadingController: LoadingController,
  private route: ActivatedRoute,
  public router: Router,
  private formBuilder: FormBuilder) {

  this.getCategories();
  this.noteForm = this.formBuilder.group({
    'title' : [null, Validators.required],
    'content' : [null, Validators.required],
    'category' : [null, Validators.required]
  });
  }

  async getCategories() {
    await this.apiCategories.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res;
      }, err => {
        console.log(err);
      });
  }

async CreateNotes(){
  this.id_name = this.noteForm.value.category.split('|');
  this.noteForm.value.category = {'id': Number(this.id_name[0]), 'name': this.id_name[1]};

  await this.api.postNotes(this.noteForm.value)
  .subscribe(res => {
      this.router.navigate(['/notes']);
    }, (err) => {
      console.log(err);
    });
}

  ngOnInit() {
  }

}
