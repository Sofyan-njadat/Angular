import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  singUp(user: any) {
    return this.http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user", user);
  }
  singIn() {
    return this.http.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user");
  }
  categoryLoad() {

    return this.http.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  addCategory(category: any) {
    return this.http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", category);
  }
  LoadProducts() {
    return this.http.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  addProduct(product: any) {
    return this.http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", product);
  }


}
