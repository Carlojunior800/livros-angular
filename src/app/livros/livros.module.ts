import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//sempre passar como ./shared e não como .
import { LivroService } from './shared';
import { ListarLivroComponent } from './listar/listar-livro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    ListarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [
    LivroService
  ]
})
export class LivrosModule { }
