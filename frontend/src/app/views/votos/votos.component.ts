import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.css']
})
export class VotosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVotosCadastrar(): void {
  	this.router.navigate(['/votos/cadastrar'])
  }

}
