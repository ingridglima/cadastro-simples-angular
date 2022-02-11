import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cep } from './cep';
import { Observable } from 'rxjs';


@Injectable()
export class CepService {

    cep: string = "";
    
    constructor(private http: HttpClient) { }

    obterEndereco(cep : string) : Observable<Cep> {
        this.cep = cep;
        return this.http
        .get<Cep>('https://viacep.com.br/ws/'+this.cep+'/json/');
    }
}