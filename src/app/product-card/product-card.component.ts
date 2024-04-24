import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Product } from '../modules/product-detail/product-data';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productClick = new EventEmitter<number>();

  goToProductDetail(): void {
    this.productClick.emit(this.product.id);
  }
}
