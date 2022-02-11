import { Component, OnInit } from '@angular/core';
import { ItemLista } from './item.lista';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
})
export class ListagemComponent implements OnInit {

  public cadastros: ItemLista[] = [];

  constructor(private listagemService: ListagemService) { 
  }

  ngOnInit(): void {
    this.obterCadastros();
    console.log(this.cadastros);
  }

  obterCadastros() {
    this.listagemService.obterCadastros().subscribe((c: ItemLista[]) => {
      this.cadastros = c;
    });
  }

  excluirCadastro(cadastro : any){
    this.listagemService.excluirCadastro(cadastro._id);
  }

}
