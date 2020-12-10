import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AssociadosListarDataSource } from './associados-listar-datasource';
import { Associado } from './../associado.model';
import { AssociadosService } from './../associados.service';

@Component({
  selector: 'app-associados-listar',
  templateUrl: './associados-listar.component.html',
  styleUrls: ['./associados-listar.component.css']
})
export class AssociadosListarComponent implements OnInit {

  associados: Associado[] 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Associado>;
  dataSource: AssociadosListarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'cpf' , 'nome_associado', 'ativo'];

  constructor(private associadosService: AssociadosService) {}

  ngOnInit() {
    this.associadosService.listar().subscribe(associados => {
      this.associados = associados
    })  
  }

}
