import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Pauta } from './pauta.model';
import { Observable, of as observableOf, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PautasService {

  baseUrl = "http://localhost:3001/pauta"	

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
  	this.snackBar.open(msg, 'X', {
  		duration: 3000,
  		horizontalPosition: "right",
  		verticalPosition: "top"
  	})
  }

  cadastrar(pauta: Pauta): Observable<Pauta> {
  	return this.http.post<Pauta>(this.baseUrl,pauta)
  }

  listar(): Observable<Pauta[]> {
  	return this.http.get<Pauta[]>(this.baseUrl)
  }
}
