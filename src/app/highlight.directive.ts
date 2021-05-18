import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elementRef: ElementRef) 
  { 
    this.elementRef.nativeElement.style.color = "brown";
  }

  @HostListener('click')onclick(){
    this.highlight('red');
  }
  private highlight(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color

  }

}
