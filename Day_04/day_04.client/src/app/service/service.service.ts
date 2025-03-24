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

  getCategoryById(id: string): Observable<any> {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }
  updateCategory(id: string, category: any): Observable<any> {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, category);
  }
  updateProductser(id: string, product: any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, product);
  }
  getProductById(id: string) {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }
  updateUser(id: string, userData: any) {
    return this.http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user/${id}`, userData);
  }
  getVoucher() {
    return this.http.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }
  AddVoucher(Voucher: any) {
    return this.http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", Voucher)
  }
  editVoucher(id: any, data: any) {
    return this.http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data);
  }
}
