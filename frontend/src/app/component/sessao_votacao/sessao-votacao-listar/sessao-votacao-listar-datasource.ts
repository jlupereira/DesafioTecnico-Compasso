import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { SessaoVotacao } from './../sessao_votacao.model';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: SessaoVotacao[] = [
  {id: 1, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 2, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 3, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 4, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 5, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 6, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 7, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 8, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 9, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
  {id: 10, id_pauta: 1, data_sessao: '25/11/2020', ativo: 'S', duracao: 120},
];

/**
 * Data source for the SessaoVotacaoListar view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SessaoVotacaoListarDataSource extends DataSource<SessaoVotacao> {
  data: SessaoVotacao[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SessaoVotacao[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SessaoVotacao[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SessaoVotacao[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'data_sessao': return compare(a.data_sessao, b.data_sessao, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
