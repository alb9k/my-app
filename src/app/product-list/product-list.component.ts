import { Product } from './../product';
import { Component, OnInit, inject } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
//import { NumericDirective } from '../numeric.directive';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-list',

  //imports: [ProductDetailComponent, SortPipe, FavoritesComponent , NumericDirective],
  imports: [ProductDetailComponent, SortPipe, FavoritesComponent, ProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
/**
 * Component that represents a list of products.
 *
 * @class ProductListComponent
 * @property {Product[]} products - An array of products to be displayed in the list.
 */
export class ProductListComponent implements OnInit {
  private productService = inject(ProductsService);

  products: Product[] = [];
  selectedProduct: Product = this.products[0];


  onAdded(product: Product) {
    alert(`"${product.title}" was added to your cart!`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
