import { Component, inject, Signal, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';

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
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }],
})
export class AppComponent {
  title: Signal<string> = signal('');
  settings = inject(APP_SETTINGS);
  currentDate = signal(new Date());

  private setTitle = () => {
    const timestamp = new Date();
    this.title = signal(`${this.settings.title} (${this.currentDate()})`);
  };

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next(this.title);
    }, 1000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });
  }
}
