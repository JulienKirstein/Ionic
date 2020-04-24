import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

    classroom: any = {};

    constructor(public api: RestApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router) { }

ngOnInit() {
  this.getClassroom();
}

    async getClassroom() {
  const loading = await this.loadingController.create();
  await loading.present();
  await this.api.getClassroomById(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      console.log(res);
      this.classroom = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

}
