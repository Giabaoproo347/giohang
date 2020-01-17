import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable()
export class ProductsDataService {
  public API_URI = './assets/products.json';
  public product: Product[];


  public constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URI);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URI}/${id}`);
  }

  public createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.API_URI}`, product);
  }

  public editProduct(product: Product): Observable<any> {
    return this.http.put(`${this.API_URI}/${product.id}`, product);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

}
