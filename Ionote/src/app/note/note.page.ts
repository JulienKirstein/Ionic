import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiServiceNotes } from '../rest-api-notes.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  note: any = {};

  constructor(public api: RestApiServiceNotes,
  public loadingController: LoadingController,
  public route: ActivatedRoute,
  public router: Router) { }


  async getNotes() {
  const loading = await this.loadingController.create({
    content: 'Loading'
  });
  await loading.present();
  await this.api.getNotesById(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      console.log(res);
      this.note = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

  ngOnInit() {
  this.getNotes();
}

}
