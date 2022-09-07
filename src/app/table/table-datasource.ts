import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataTableFilter, UserData, DataTableObject } from './table.model';
import { AppService } from '../app.service';

export class TableDataSource extends DataSource<UserData> {
/**
   * Private variables
   */
 private totalApplicatorsCountSubject = new BehaviorSubject<number>(0);

/**
 * Public variables
 */
public applicatorsSubject = new BehaviorSubject<UserData[]>([]);
public totalApplicatorsCount$ = this.totalApplicatorsCountSubject.asObservable();

paginator: MatPaginator | undefined;
sort: MatSort | undefined;

// -----------------------------------------------------------------------------------------------------
// @ Constructor
// -----------------------------------------------------------------------------------------------------
constructor(private _appService: AppService) {
  super();
}


/**
 * Function to load jobs
 */
loadTableData(filter: DataTableFilter) {
  // 1. Make POST API Request to get table data, pass 'filter' as input parameter ( use the constructor to import some service )
  // 2. Subscribed API data pass to the following subjects:
  // - applicatorsSubject ( applicants array )
  // - totalApplicatorsCountSubject ( total applicants )
//   this.totalApplicatorsCountSubject.next;
debugger;
  this._appService.getApplicatorsList(filter).subscribe(
    (response: DataTableObject<UserData[]>) => {
      if(response) {
        this.totalApplicatorsCountSubject.next(response.totalRecords);
        this.applicatorsSubject.next(response.items);
        
      }
    }
  )
}


/////  --- Default DataSource Functions ---   /////

/**
 * Connect this data source to the table. The table will only update when
 * the returned stream emits new items.
 * @returns A stream of the items to be rendered.
 */
connect(): Observable<UserData[]> {
  return this.applicatorsSubject.asObservable();
}

/**
 *  Called when the table is being destroyed. Use this function, to clean up
 * any open connections or free any held resources that were set up during connect.
 */
disconnect(): void {
  this.applicatorsSubject.complete();
  this.totalApplicatorsCountSubject.complete();
}

}