import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemLista } from '../listagem/item.lista';


@Injectable()
export class FormularioService {

    postId: any;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    constructor(private http: HttpClient) { }

    createCadastro(cadastro : ItemLista) {
        this.http.post<any>('http://localhost:3000/cadastros/novo', JSON.stringify(cadastro), this.httpOptions)
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }
}