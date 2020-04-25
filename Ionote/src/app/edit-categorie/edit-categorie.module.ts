import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCategoriePageRoutingModule } from './edit-categorie-routing.module';

import { EditCategoriePage } from './edit-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCategoriePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditCategoriePage]
})
export class EditCategoriePageModule {}
