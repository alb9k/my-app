import { Product } from './product';
import { Observable, of } from 'rxjs';

export class ProductsService {

  constructor() {};

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  private products: Product[] = [
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
    {
      id: 4,
      title: 'Tablet',
      price: 200,
      categories: { 4: 'Entertainment' },
    },
    {
      id: 5,
      title: 'LCD Screen',
      price: 550,
      categories: { 1: 'Computing', 2: 'Peripherals', 3: 'Multimedia' },
    },
    {
      id: 6,
      title: 'Router',
      price: 90,
      categories: { 1: 'Network', 2: 'Peripherical'},
    },
  ];


}
