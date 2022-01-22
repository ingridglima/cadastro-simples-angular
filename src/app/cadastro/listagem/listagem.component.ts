import { Component, OnInit } from '@angular/core';
import { ItemLista } from './item.lista';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
})
export class ListagemComponent implements OnInit {

  public cadastros: ItemLista[] = [];

  ngOnInit(): void {
  }

  adicionarCadastro(item : ItemLista){
    item.id = this.cadastros.length + 1;
    this.cadastros.push(item);
  }

}
