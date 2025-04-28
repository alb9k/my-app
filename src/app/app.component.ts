import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

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
  imports: [
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    KeyLoggerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }],
})
export class AppComponent {
  title: string = 'Ciao Alberto!';
  settings = inject(APP_SETTINGS);

  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} (${timestamp})`;
  };

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next(this.title);
    }, 1000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
  }
}
