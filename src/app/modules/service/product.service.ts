import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../product-detail/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/products.json';  // Asegúrate de tener este archivo en la carpeta assets con el formato correcto

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products: Product[]) => products.find(product => product.id === id))
    );
  }
}
