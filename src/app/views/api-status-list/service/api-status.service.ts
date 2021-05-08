import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiStatusService {

  constructor(private _http: HttpClient) { }
  public showMessage() {
    return this._http.get('http://localhost:8080/', {responseType: 'text'});
  }
}
