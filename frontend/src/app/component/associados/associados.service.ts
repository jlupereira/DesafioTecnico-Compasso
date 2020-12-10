import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Associado } from './associado.model';
import { Observable, of as observableOf, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociadosService {

  baseUrl = "http://localhost:3001/associado"	

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
  	this.snackBar.open(msg, 'X', {
  		duration: 3000,
  		horizontalPosition: "right",
  		verticalPosition: "top"
  	})
  }

  cadastrar(associado: Associado): Observable<Associado> {
  	return this.http.post<Associado>(this.baseUrl,associado)
  }

  listar(): Observable<Associado[]> {
  	return this.http.get<Associado[]>(this.baseUrl)
  }
}
