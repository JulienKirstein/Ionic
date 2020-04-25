import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCategoriePage } from './edit-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: EditCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCategoriePageRoutingModule {}
