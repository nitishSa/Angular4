import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chart-host]',
})
export class MainChartDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
