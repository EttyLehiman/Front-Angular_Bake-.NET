import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'select[appSelectStyling]'
})
export class SelectStylingDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid #ccc');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#fff');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#555');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-color', 'blue');

  }

}
