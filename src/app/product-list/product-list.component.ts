import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../modules/product-detail/product-data';
import { ProductService } from '../modules/service/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListaComponent implements OnInit {
  products: Product[] = [];
  cargando: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

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

  goToProductDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
