import { Component, OnInit } from '@angular/core';
import { SessaoVotacaoService } from './../sessao_votacao.service';
import { Router } from '@angular/router';
import { SessaoVotacao } from './../sessao_votacao.model';

@Component({
  selector: 'app-sessao-votacao-cadastrar',
  templateUrl: './sessao-votacao-cadastrar.component.html',
  styleUrls: ['./sessao-votacao-cadastrar.component.css']
})
export class SessaoVotacaoCadastrarComponent implements OnInit {

  sessaovotacao: SessaoVotacao = {
  	id_pauta: 0,
  	data_sessao: '',
  	ativo: '',
  	duracao: 0
  }	 

  constructor(private sessaovotacaoService: SessaoVotacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarSessaoVotacao(): void {
  	this.sessaovotacaoService.cadastrar(this.sessaovotacao).subscribe(() => {
  		this.sessaovotacaoService.showMessage('Sessão aberta com sucesso!!!')
  		this.router.navigate(['/sessao-votacao'])
  	})

  }

  cancelar(): void {
  	this.router.navigate(['/sessao-votacao'])
  }

}
