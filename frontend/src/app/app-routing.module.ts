import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PautasComponent } from './views/pautas/pautas.component';
import { AssociadosComponent } from './views/associados/associados.component';
import { SessaoVotacaoComponent } from './views/sessao-votacao/sessao-votacao.component';
import { VotosComponent } from './views/votos/votos.component';
import { PautasCadastrarComponent } from './component/pautas/pautas-cadastrar/pautas-cadastrar.component';
import { AssociadosCadastrarComponent } from './component/associados/associados-cadastrar/associados-cadastrar.component';
import { SessaoVotacaoCadastrarComponent } from './component/sessao_votacao/sessao-votacao-cadastrar/sessao-votacao-cadastrar.component';
import { VotosCadastrarComponent } from './component/votos/votos-cadastrar/votos-cadastrar.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "pautas",
		component: PautasComponent
	},
	{
		path: "associados",
		component: AssociadosComponent
	},
	{
		path: "sessao-votacao",
		component: SessaoVotacaoComponent
	},
	{
		path: "votos",
		component: VotosComponent
	},
	{
		path: "pautas/cadastrar",
		component: PautasCadastrarComponent
	},
    {
		path: "associados/cadastrar",
		component: AssociadosCadastrarComponent
	},
	{
		path: "sessao-votacao/cadastrar",
		component: SessaoVotacaoCadastrarComponent
	},
	{
		path: "votos/cadastrar",
		component: VotosCadastrarComponent
	} 	 		
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
