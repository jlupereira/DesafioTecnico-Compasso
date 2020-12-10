import { Component, OnInit } from '@angular/core';
import { Pauta } from './../pauta.model';
import { PautasService } from './../pautas.service';

@Component({
  selector: 'app-pautas-lista',
  templateUrl: './pautas-lista.component.html',
  styleUrls: ['./pautas-lista.component.css']
})
export class PautasListaComponent implements OnInit {

  pautas: Pauta[]	

  displayedColumns = ['id', 'descricao', 'data_criacao']

  constructor(private pautasService: PautasService) {}

  ngOnInit(): void {
  	this.pautasService.listar().subscribe(pautas => {
  		this.pautas = pautas
  	})
  }

}
