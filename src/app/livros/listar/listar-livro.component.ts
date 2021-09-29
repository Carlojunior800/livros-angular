import { Component, OnInit } from '@angular/core';
import { Livro, LivroService } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {
  livros: Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livros = this.listarTodos();
    this.livros = [new Livro (232,"O Hobbit","fantasia", true)];
    
  }
  listarTodos(): Livro[]{
    return this.livroService.listarTodos();
  }

}
