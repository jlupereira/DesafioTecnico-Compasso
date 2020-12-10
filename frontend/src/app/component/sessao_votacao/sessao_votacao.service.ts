import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { SessaoVotacao } from './sessao_votacao.model';
import { Observable, of as observableOf, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessaoVotacaoService {

  baseUrl = "http://localhost:3001/sessao_votacao"	

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
  	this.snackBar.open(msg, 'X', {
  		duration: 3000,
  		horizontalPosition: "right",
  		verticalPosition: "top"
  	})
  }

  cadastrar(sessaovotacao: SessaoVotacao): Observable<SessaoVotacao> {
  	return this.http.post<SessaoVotacao>(this.baseUrl,sessaovotacao)
  }

  listar(): Observable<SessaoVotacao[]> {
  	return this.http.get<SessaoVotacao[]>(this.baseUrl)
  }
}
