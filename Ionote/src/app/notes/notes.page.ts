import { LoadingController } from '@ionic/angular';
import { RestApiServiceNotes } from '../rest-api-notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

    notes: any;

    constructor(public api: RestApiServiceNotes, public loadingController: LoadingController) { }

    ngOnInit() {
    console.log("List page");
    this.getNotes();
    }

    async getNotes() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getNotes()
      .subscribe(res => {
        console.log(res);
        this.notes = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }
}