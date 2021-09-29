import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroRoutes } from './livros';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'livros/listar',
    pathMatch: 'full'
  },
  ...LivroRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
