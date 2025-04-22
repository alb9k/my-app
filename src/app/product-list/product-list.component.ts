import { Product } from './../product';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
/**
 * Component that represents a list of products.
 *
 * @class ProductListComponent
 * @property {Product[]} products - An array of products to be displayed in the list.
 */


export class ProductListComponent {

  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'Tablet' },
    { id: 5, title: 'LCD Screen' }
  ];

  selectedProduct!: Product;

  onAdded(product : Product) {
    alert(`"${product.title}" was added to your cart!`);
  }
}


