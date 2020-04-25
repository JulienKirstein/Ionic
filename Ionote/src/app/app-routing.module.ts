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
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'categorie/:id',
    loadChildren: './categorie/categorie.module#CategoriePageModule',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'note/:id',
    loadChildren: './note/note.module#NotePageModule',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'create-categorie',
    loadChildren: () => import('./create-categorie/create-categorie.module').then( m => m.CreateCategoriePageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'edit-categorie',
    loadChildren: () => import('./edit-categorie/edit-categorie.module').then( m => m.EditCategoriePageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'edit-categorie/:id',
    loadChildren: './edit-categorie/edit-categorie.module#EditCategoriePageModule',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'edit-note',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'edit-note/:id',
    loadChildren: './edit-note/edit-note.module#EditNotePageModule',
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'create-note',
    loadChildren: () => import('./create-note/create-note.module').then( m => m.CreateNotePageModule),
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
