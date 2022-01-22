import { Component, OnInit } from '@angular/core';
import { CepService } from '../formulario/cep/cep.service';
import { Cep } from '../formulario/cep/cep';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemLista } from '../listagem/item.lista';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit{

  formCadastro: FormGroup;
  itemCadastro: ItemLista;
  cep: string = "";
  endereco: Cep = new Cep;
  listagem: ListagemComponent;

  constructor(private cepService: CepService) { 
  }

  ngOnInit(): void {
    this.createForm(new ItemLista());
    this.listagem = new  ListagemComponent;
  }

  KeyUp(event: any){
    this.cep = event.target.value;

    if(this.cep.match("^[0-9]{5}-[0-9]{3}$") || this.cep.match("^[0-9]{8}$")){
    this.cepService.obterEndereco(this.cep)
    .subscribe(
      cep => {
        this.endereco = cep;
        console.log(cep);
      },
      error => console.log(error)
      );
    }
    
  }

  createForm(item: ItemLista) {
    this.formCadastro = new FormGroup({
      nome: new FormControl(item.nome),
      email: new FormControl(item.email),
      logradouro: new FormControl(item.logradouro),
      bairro: new FormControl(item.bairro),
      localidade: new FormControl(item.localidade),
      uf: new FormControl(item.uf),
      ibge: new FormControl(item.ibge),
      observacoes: new FormControl(item.observacoes)
    })
  }

  onSubmit() {

    this.itemCadastro = this.formCadastro.value;
    (!this.itemCadastro.logradouro) ? 
    this.itemCadastro.logradouro = this.endereco.logradouro : null;
    (!this.itemCadastro.localidade) ?
    this.itemCadastro.localidade = this.endereco.localidade : null;
    (!this.itemCadastro.bairro) ?
    this.itemCadastro.bairro = this.endereco.bairro : null;
    (!this.itemCadastro.uf) ?
    this.itemCadastro.uf = this.endereco.uf : null;
    (!this.itemCadastro.ibge) ?
    this.itemCadastro.ibge = this.endereco.ibge : null;
    this.listagem.adicionarCadastro(this.itemCadastro);

    this.formCadastro.reset(new ItemLista());
  }

}
