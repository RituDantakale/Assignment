import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getData():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/posts";
return this.httpclient.get(url)
  }
  

  constructor(private httpclient: HttpClient) { }
}


