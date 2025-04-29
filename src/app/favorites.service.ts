import { Injectable } from '@angular/core';
import { Product } from './product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService{

  constructor() {
    super();
  }

  override getProducts(): Observable<Product[]> {
    return super.getProducts().pipe(
      map(p => p.slice(0, 3))
    );
  }
}
