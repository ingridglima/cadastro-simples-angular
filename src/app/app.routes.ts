import{ Routes } from '@angular/router';
import { FormularioComponent } from './cadastro/formulario/formulario.component'; 

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/form', pathMatch: 'full'},
    {path: 'home', component: FormularioComponent}
];