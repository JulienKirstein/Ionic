import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'categorie/:id',
    loadChildren: './categorie/categorie.module#CategoriePageModule'
  },
  {
    path: 'note/:id',
    loadChildren: './note/note.module#NotePageModule'
  },
  {
    path: 'create-categorie',
    loadChildren: () => import('./create-categorie/create-categorie.module').then( m => m.CreateCategoriePageModule)
  },
  {
    path: 'edit-categorie',
    loadChildren: () => import('./edit-categorie/edit-categorie.module').then( m => m.EditCategoriePageModule)
  },
  {
    path: 'edit-categorie/:id',
    loadChildren: './edit-categorie/edit-categorie.module#EditCategoriePageModule'
  },
  {
    path: 'edit-note',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'edit-note/:id',
    loadChildren: './edit-note/edit-note.module#EditNotePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
