import { LoadingController } from '@ionic/angular';
import { RestApiServiceNotes } from '../rest-api-notes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {

    navigationSubscription;
    notes: any;
    notes_view: any;

    constructor(public api: RestApiServiceNotes, public loadingController: LoadingController, private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
         if (e instanceof NavigationEnd) {
           this.initialiseInvites();
         }
        });
    }

    initialiseInvites() {
    this.getNotes();
    }

    ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
    }

    ngOnInit() {
    this.getNotes();
    }

    async getNotes() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getNotes()
      .subscribe(res => {
        console.log(res);
        this.notes = res;
        this.notes_view = this.notes;
        console.log(this.notes);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }

    filterList(evt) {
      this.notes_view = this.notes;
      const searchTerm = evt.srcElement.value;

      if (!searchTerm) {
        return;
      }

      this.notes_view = this.notes_view.filter(currentGoal => {
        if (currentGoal.title && searchTerm) {
          if (currentGoal.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
}