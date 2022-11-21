import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './../models/product.model';
@Injectable()
export class GeneralService {
  API: string =
    'https://crudcrud.com/api/b276a0d9ade2434e86ffee80a0897aee/products';

  constructor(private http: HttpClient) {}

  getListProducts() {
    return this.http.get(`${this.API}`);
  }

  createProducts(body: product) {
    return this.http.post(`${this.API}`, body);
  }

  getProduct(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateProdudct(id: string, body: product) {
    return this.http.put(`${this.API}/${id}`, body);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
