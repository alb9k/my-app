import { Product } from './../product';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
/**
 * Component that represents a list of products.
 *
 * @class ProductListComponent
 * @property {Product[]} products - An array of products to be displayed in the list.
 */
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 30,
      categories: {
        1: 'Computing',
        2: 'Peripherals',
      },
    },
    {
      id: 2,
      title: 'Microphone',
      price: 20,
      categories: {
        1: 'Computing',
        2: 'Peripherals',
      },
    },
    {
      id: 3,
      title: 'Web camera',
      price: 55,
      categories: {
        1: 'Computing',
        3: 'Multimedia',
      },
    },
    { id: 4, title: 'Tablet', price: 200, categories: { 4: 'Entertainment' } },
    {
      id: 5,
      title: 'LCD Screen',
      price: 550,
      categories: { 1: 'Computing', 2: 'Peripherals', 3: 'Multimedia' },
    },
  ];

  selectedProduct: Product = this.products[0];

  onAdded(product: Product) {
    alert(`"${product.title}" was added to your cart!`);
  }
}
