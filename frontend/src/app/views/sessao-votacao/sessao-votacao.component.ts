import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessao-votacao',
  templateUrl: './sessao-votacao.component.html',
  styleUrls: ['./sessao-votacao.component.css']
})
export class SessaoVotacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSessaoVotacaoCadastrar(): void {
  	this.router.navigate(['/sessao-votacao/cadastrar'])
  }

}
