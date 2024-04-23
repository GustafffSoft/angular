import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product-detail/product-data';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule , CommonModule], // Añade aquí otros componentes o directivas que necesites
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cargando: boolean = false;

  constructor(private productService: ProductService) {} // Inyecta ProductService

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.productService.getProducts().subscribe({
      next: (productos) => {
        this.products = productos;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar los productos: ', error);
        this.cargando = false;
      }
    });
  }
}
