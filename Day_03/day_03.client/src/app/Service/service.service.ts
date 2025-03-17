import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  onSubmit(data: any) {
    return this._http.post("https://67d760e89d5e3a10152ab1ca.mockapi.io/v1/user", data);
  }

  onLogIn() {
    return this._http.get<any>("https://67d760e89d5e3a10152ab1ca.mockapi.io/v1/user")
  }
}


