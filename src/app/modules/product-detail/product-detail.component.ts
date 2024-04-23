import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product-data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const id = +params['id'];  // El '+' convierte el parámetro de la ruta a un número
    //   this.productService.getProductById(id).subscribe(product => {
    //     this.product = product;
    //   });
    // });
  }

}
