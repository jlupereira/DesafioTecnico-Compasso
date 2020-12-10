import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associados',
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.css']
})
export class AssociadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAssociadosCadastrar(): void {
  	this.router.navigate(['/associados/cadastrar'])
  }

}
