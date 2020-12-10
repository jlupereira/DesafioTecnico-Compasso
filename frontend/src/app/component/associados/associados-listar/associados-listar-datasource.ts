import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Associado } from './../associado.model';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Associado[] = [
  {id: 1, cpf: 52060390064 , nome_associado: 'Hydrogen', ativo: 'S'},
  {id: 2, cpf: 52060390064 , nome_associado: 'Helium', ativo: 'S'},
  {id: 3, cpf: 52060390064 , nome_associado: 'Lithium', ativo: 'S'},
  {id: 4, cpf: 52060390064 , nome_associado: 'Beryllium', ativo: 'S'},
  {id: 5, cpf: 52060390064 , nome_associado: 'Boron', ativo: 'S'},
  {id: 6, cpf: 52060390064 , nome_associado: 'Carbon', ativo: 'S'},
  {id: 7, cpf: 52060390064 , nome_associado: 'Nitrogen', ativo: 'S'},
  {id: 8, cpf: 52060390064 , nome_associado: 'Oxygen', ativo: 'S'},
  {id: 9, cpf: 52060390064 , nome_associado: 'Fluorine', ativo: 'S'},
  {id: 10, cpf: 52060390064 , nome_associado: 'Neon', ativo: 'S'},
  {id: 11, cpf: 52060390064 , nome_associado: 'Sodium', ativo: 'S'},
  {id: 12, cpf: 52060390064 , nome_associado: 'Magnesium', ativo: 'S'},
  {id: 13, cpf: 52060390064 , nome_associado: 'Aluminum', ativo: 'S'},
  {id: 14, cpf: 52060390064 , nome_associado: 'Silicon', ativo: 'S'},
  {id: 15, cpf: 52060390064 , nome_associado: 'Phosphorus', ativo: 'S'},
  {id: 16, cpf: 52060390064 , nome_associado: 'Sulfur', ativo: 'S'},
  {id: 17, cpf: 52060390064 , nome_associado: 'Chlorine', ativo: 'S'},
  {id: 18, cpf: 52060390064 , nome_associado: 'Argon', ativo: 'S'},
  {id: 19, cpf: 52060390064 , nome_associado: 'Potassium', ativo: 'S'},
  {id: 20, cpf: 52060390064 , nome_associado: 'Calcium', ativo: 'S'},
];

/**
 * Data source for the AssociadosListar view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AssociadosListarDataSource extends DataSource<Associado> {
  data: Associado[] = EXAMPLE_DATA;
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
  connect(): Observable<Associado[]> {
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
  private getPagedData(data: Associado[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Associado[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome_associado': return compare(a.nome_associado, b.nome_associado, isAsc);
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
