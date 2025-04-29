import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable()
export class ProductViewService {

  private product: Product | undefined;

  constructor(private productService: ProductsService) {}

  getProduct(id: number): Product | undefined {
    this.productService.getProducts().subscribe((products: Product[]) => {
      if (!this.product) {
        this.product = products.find((product: Product) => product.id === id);
      }
    });
    return this.product;
  }
}
