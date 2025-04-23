import { CopyrightDirective } from './copyright.directive';

describe('CopyrightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') };
    const directive = new CopyrightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
