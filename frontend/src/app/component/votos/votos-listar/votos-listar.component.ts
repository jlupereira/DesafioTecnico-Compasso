import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { VotosListarDataSource } from './votos-listar-datasource';
import { Voto } from './../votos.model';
import { VotosService } from './../votos.service';

@Component({
  selector: 'app-votos-listar',
  templateUrl: './votos-listar.component.html',
  styleUrls: ['./votos-listar.component.css']
})
export class VotosListarComponent implements OnInit {

  votos: Voto[] 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Voto>;
  dataSource: VotosListarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_sessao', 'voto', 'id_associado'];

  constructor(private votosService: VotosService) {}

  ngOnInit() {
    this.votosService.listar().subscribe(votos => {
      this.votos = votos
    })  
  }

}
