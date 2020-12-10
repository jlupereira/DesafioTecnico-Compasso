import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Pauta } from './../pauta.model';

// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Pauta[] = [
  {id: 1, descricao: 'Hydrogen', data_criacao: '24/11/2020'},
  {id: 2, descricao: 'Helium', data_criacao: '24/11/2020'},
  {id: 3, descricao: 'Lithium', data_criacao: '24/11/2020'},
  {id: 4, descricao: 'Beryllium', data_criacao: '24/11/2020'},
  {id: 5, descricao: 'Boron', data_criacao: '24/11/2020'},
  {id: 6, descricao: 'Carbon', data_criacao: '24/11/2020'},
  {id: 7, descricao: 'Nitrogen', data_criacao: '24/11/2020'},
  {id: 8, descricao: 'Oxygen', data_criacao: '24/11/2020'},
  {id: 9, descricao: 'Fluorine', data_criacao: '24/11/2020'},
  {id: 10, descricao: 'Neon', data_criacao: '24/11/2020'},
  {id: 11, descricao: 'Sodium', data_criacao: '24/11/2020'},
  {id: 12, descricao: 'Magnesium', data_criacao: '24/11/2020'},
  {id: 13, descricao: 'Aluminum', data_criacao: '24/11/2020'},
  {id: 14, descricao: 'Silicon', data_criacao: '24/11/2020'},
  {id: 15, descricao: 'Phosphorus', data_criacao: '24/11/2020'},
  {id: 16, descricao: 'Sulfur', data_criacao: '24/11/2020'},
  {id: 17, descricao: 'Chlorine', data_criacao: '24/11/2020'},
  {id: 18, descricao: 'Argon', data_criacao: '24/11/2020'},
  {id: 19, descricao: 'Potassium', data_criacao: '24/11/2020'},
  {id: 20, descricao: 'Calcium', data_criacao: '24/11/2020'},
];

/**
 * Data source for the PautasLista2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PautasLista2DataSource extends DataSource<Pauta> {
  data: Pauta[] = EXAMPLE_DATA;
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
  connect(): Observable<Pauta[]> {
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
  private getPagedData(data: Pauta[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Pauta[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'descricao': return compare(a.descricao, b.descricao, isAsc);
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
