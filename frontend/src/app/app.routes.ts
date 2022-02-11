import{ Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FormularioComponent } from './cadastro/formulario/formulario.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: FormularioComponent},
    {path: 'listagem', component: ListagemComponent}
];