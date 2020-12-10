import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PautasLista2DataSource } from './pautas-lista2-datasource';
import { Pauta } from './../pauta.model';

@Component({
  selector: 'app-pautas-lista2',
  templateUrl: './pautas-lista2.component.html',
  styleUrls: ['./pautas-lista2.component.css']
})
export class PautasLista2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Pauta>;
  dataSource: PautasLista2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'descricao', 'data_cadastro'];

  ngOnInit() {
    this.dataSource = new PautasLista2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
