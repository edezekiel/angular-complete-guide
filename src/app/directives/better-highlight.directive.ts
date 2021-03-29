import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // renderer is a better approach to accessing the DOM.
    // because Angular can work without using the DOM, e.g., when using service workers
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightBlue');
  }
}
