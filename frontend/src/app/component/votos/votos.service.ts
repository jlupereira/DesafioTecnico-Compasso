import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Voto } from './votos.model';
import { Observable, of as observableOf, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  baseUrl = "http://localhost:3001/voto"	

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
  	this.snackBar.open(msg, 'X', {
  		duration: 3000,
  		horizontalPosition: "right",
  		verticalPosition: "top"
  	})
  }

  cadastrar(voto: Voto): Observable<Voto> {
  	return this.http.post<Voto>(this.baseUrl,voto)
  }

  listar(): Observable<Voto[]> {
  	return this.http.get<Voto[]>(this.baseUrl)
  }
}
