import { Component, OnInit } from '@angular/core';
import { AssociadosService } from './../associados.service';
import { Router } from '@angular/router';
import { Associado } from './../associado.model';

@Component({
  selector: 'app-associados-cadastrar',
  templateUrl: './associados-cadastrar.component.html',
  styleUrls: ['./associados-cadastrar.component.css']
})
export class AssociadosCadastrarComponent implements OnInit {

  associado: Associado = {
  	cpf: 0,
  	nome_associado: '',
  	ativo: ''
  }	 

  constructor(private associadosService: AssociadosService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarAssociado(): void {
  	this.associadosService.cadastrar(this.associado).subscribe(() => {
  		this.associadosService.showMessage('Associado cadastrado com sucesso!!!')
  		this.router.navigate(['/associados'])
  	})

  }

  cancelar(): void {
  	this.router.navigate(['/associados'])
  }

}
