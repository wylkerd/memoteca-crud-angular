import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: '', // Rota inicial,
    redirectTo: 'listarPensamentos',
    pathMatch: 'full' // para ler toda url e redirecionar
  },
  {
    path: 'criarPensamento', // Dando nome à rota
    component: CriarPensamentoComponent,
  },
  {
    path: 'listarPensamentos', // Dando nome à rota
    component: ListarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
