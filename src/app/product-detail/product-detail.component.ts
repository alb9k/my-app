import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent {
  product = input.required<Product>();
  added = output<Product>();

  addToCart() {
   this.added.emit(this.product()!);
   console.log('Product was added to your cart:', this.product);
  }

  get productTitle() {
    return this.product()!.title;
  }
}


