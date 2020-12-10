import { Component, OnInit } from '@angular/core';
import { PautasService } from './../pautas.service';
import { Router } from '@angular/router';
import { Pauta } from './../pauta.model';

@Component({
  selector: 'app-pautas-cadastrar',
  templateUrl: './pautas-cadastrar.component.html',
  styleUrls: ['./pautas-cadastrar.component.css']
})
export class PautasCadastrarComponent implements OnInit {

  pauta: Pauta = {
  	descricao: '',
  	data_criacao: ''
  }	

  constructor(private pautasService: PautasService, private router: Router) { }

  ngOnInit(): void {
  	
  }

  cadastrarPauta(): void {
  	this.pautasService.cadastrar(this.pauta).subscribe(() => {
  		this.pautasService.showMessage('Pauta cadastrada com sucesso!!!')
  		this.router.navigate(['/pautas'])
  	})

  }

  cancelar(): void {
  	this.router.navigate(['/pautas'])
  }

}