import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SessaoVotacaoListarDataSource } from './sessao-votacao-listar-datasource';
import { SessaoVotacao } from './../sessao_votacao.model';
import { SessaoVotacaoService } from './../sessao_votacao.service';

@Component({
  selector: 'app-sessao-votacao-listar',
  templateUrl: './sessao-votacao-listar.component.html',
  styleUrls: ['./sessao-votacao-listar.component.css']
})
export class SessaoVotacaoListarComponent implements AfterViewInit, OnInit {

  sessaovotacao: SessaoVotacao[] 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SessaoVotacao>;
  dataSource: SessaoVotacaoListarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_pauta', 'data_sessao', 'ativo', 'duracao'];

  constructor(private sessaovotacaoService: SessaoVotacaoService) {}

  ngOnInit() {
    this.sessaovotacaoService.listar().subscribe(sessaovotacao => {
      this.sessaovotacao = sessaovotacao
    })  
  }

}
