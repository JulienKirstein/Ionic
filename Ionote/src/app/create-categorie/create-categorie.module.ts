import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCategoriePageRoutingModule } from './create-categorie-routing.module';

import { CreateCategoriePage } from './create-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateCategoriePageRoutingModule
  ],
  declarations: [CreateCategoriePage]
})
export class CreateCategoriePageModule {}
