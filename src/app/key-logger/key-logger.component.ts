import { Component, ElementRef, OnInit, viewChild, input } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css',
})
export class KeyLoggerComponent implements OnInit {
  
  input = viewChild<ElementRef>('keyContainer');
  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement,'keyup');
    logger$.pipe(
      map((evt) => evt.key.charCodeAt(0)),
      filter((keyCode) => (keyCode > 31 && (keyCode < 48 || keyCode > 57))===false),
      map((keyCode) => String.fromCharCode(keyCode)),
      tap(digit => this.keys += digit)
    ).subscribe();
  }
}
