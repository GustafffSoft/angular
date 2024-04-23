import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../product-detail/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => products.map((product, index) => ({
        ...product,
        id: index
      })))
    );
  }
}
