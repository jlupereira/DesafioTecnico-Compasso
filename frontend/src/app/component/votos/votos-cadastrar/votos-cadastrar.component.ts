import { Component, OnInit } from '@angular/core';
import { VotosService } from './../votos.service';
import { Router } from '@angular/router';
import { Voto } from './../votos.model';

@Component({
  selector: 'app-votos-cadastrar',
  templateUrl: './votos-cadastrar.component.html',
  styleUrls: ['./votos-cadastrar.component.css']
})
export class VotosCadastrarComponent implements OnInit {

  voto: Voto = {
  	id_sessao: 0,
  	voto: '',
  	id_associado: 0
  }	 

  constructor(private votosService: VotosService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarVotos(): void {
  	this.votosService.cadastrar(this.voto).subscribe(() => {
  		this.votosService.showMessage('Voto cadastrado com sucesso!!!')
  		this.router.navigate(['/votos'])
  	})

  }

  cancelar(): void {
  	this.router.navigate(['/votos'])
  }

}
