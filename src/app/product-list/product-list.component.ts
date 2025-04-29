import { Product } from './../product';
import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { Subscription } from 'rxjs';
//import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',

  //imports: [ProductDetailComponent, SortPipe, FavoritesComponent , NumericDirective],
  imports: [
    ProductDetailComponent,
    SortPipe,
    FavoritesComponent,
    ProductViewComponent,
    AsyncPipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService],
})
/**
 * Component that represents a list of products.
 *
 * @class ProductListComponent
 * @property {Product[]} products - An array of products to be displayed in the list.
 */
export class ProductListComponent implements OnInit {
  private productService = inject(ProductsService);
  private productsSub: Subscription | undefined;
  private destroyRef = inject(DestroyRef);
  products$: Observable<Product[]> | undefined;

  products: Product[] = [];
  selectedProduct: Product = this.products[0];

  onAdded(product: Product) {
    alert(`"${product.title}" was added to your cart!`);
  }

  // private getProducts() {
  //   this.productsSub = this.productService
  //     .getProducts()
  //     .subscribe((products) => {
  //       this.products = products;
  //     });
  // }

  /*
  private getProducts() {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((products) => {
        this.products = products;
      });
  }
  */

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
