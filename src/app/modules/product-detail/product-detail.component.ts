import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from './product-data';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];  // El '+' convierte el parámetro de la ruta a un número
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      });
    });
  }
}
