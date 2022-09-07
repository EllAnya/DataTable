import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult, DataTableFilter, DataTableObject, UserData } from './table/table.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient,) { }

  getApplicatorsList(filter: DataTableFilter):  Observable<any> {
    return this._httpClient.post<any>(`http://api.interns.techup.me/user/datatable`, filter)
  }
}
