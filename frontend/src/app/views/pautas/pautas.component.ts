import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pautas',
  templateUrl: './pautas.component.html',
  styleUrls: ['./pautas.component.css']
})
export class PautasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPautasCadastrar(): void {
  	this.router.navigate(['/pautas/cadastrar'])
  }

}
