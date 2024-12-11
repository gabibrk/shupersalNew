import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSplitSizeColor]'
})
export class SplitSizeColorDirective implements OnInit {
  @Input('appSplitSizeColor') sizeColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.sizeColor) {
      const [size, color] = this.sizeColor.split('/');
      this.el.nativeElement.innerHTML = `
        <div>Color: ${color || 'N/A'}</div>
        <div>Size: ${size || 'N/A'}</div>
      `;
    }
  }
}
