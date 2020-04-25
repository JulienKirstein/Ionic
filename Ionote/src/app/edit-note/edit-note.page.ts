import { LoadingController } from '@ionic/angular';
import { RestApiServiceNotes } from '../rest-api-notes.service';
import { RestApiServiceCategories } from '../rest-api-categories.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {

  noteForm: FormGroup;
  categories: any;

  constructor(public api: RestApiServiceNotes,
  public apiCategories: RestApiServiceCategories,
  public loadingController: LoadingController,
  private route: ActivatedRoute,
  public router: Router,
  private formBuilder: FormBuilder) {
  this.getNotes(this.route.snapshot.paramMap.get('id'));
  this.noteForm = this.formBuilder.group({
    'title' : [null, Validators.required],
    'content' : [null, Validators.required],
    'category' : this.formBuilder.group({
        'id': [null, [Validators.required]],
        'name': [null, [Validators.required]],
    }),
  });
  }

  async getNotes(id) {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.apiCategories.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });


  await this.api.getNotesById(id).subscribe(res => {
    this.noteForm.controls['title'].setValue(res.title);
    this.noteForm.controls['content'].setValue(res.content);
    this.noteForm.controls['category'].setValue({'name': res.category.name, 'id': res.category.id});
    });
  }



async updateNotes(){
  await this.api.updateNotes(this.route.snapshot.paramMap.get('id'), this.noteForm.value)
  .subscribe(res => {
      let id = res['id'];
      this.router.navigate(['/note', JSON.stringify(id)]);
    }, (err) => {
      console.log(err);
    });
}

  ngOnInit() {
  }

}
