import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  configUrl = '';
  constructor(private http: HttpClient) { }

  getUserData(numOfRecords) : Observable<any> {
    this.configUrl = 'https://randomuser.me/api/?results='+numOfRecords
    return this.http.get(this.configUrl);
  }
}
