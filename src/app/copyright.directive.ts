import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    const propertyName: string = 'Alberto Levy,';
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright ©${currentYear} ${propertyName} All Rights Reserved`;
  }

}
