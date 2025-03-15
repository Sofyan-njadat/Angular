import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private sofyan: HttpClient) { }

  getCategory() {
    return this.sofyan.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");

  }

  getproduct(productID: any) {
    return this.sofyan.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");

  }
  private products = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  getProductById(productId: string): Observable<any> {
    return this.sofyan.get(`${this.products}/${productId}`);
   
  }
 


}
