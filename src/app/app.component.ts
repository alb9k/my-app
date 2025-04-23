import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';

/**
 * The main component of the application.
 *
 * @selector 'app-root'
 * @imports [RouterOutlet, ProductListComponent]
 * @templateUrl './app.component.html'
 * @styleUrl './app.component.css'
 *
 * @class AppComponent
 * @property {string} title - The title of the application.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is the Alberto\'s World!';
}
