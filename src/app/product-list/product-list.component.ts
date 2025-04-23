import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { NumericDirective } from '../numeric.directive';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, NumericDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
/**
 * Component that represents a list of products.
 *
 * @class ProductListComponent
 * @property {Product[]} products - An array of products to be displayed in the list.
 */
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  /*constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts();
  }
  */

  constructor(private productService: ProductsService) {}

  selectedProduct: Product = this.products[0];


  onAdded(product: Product) {
    alert(`"${product.title}" was added to your cart!`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
