import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPropogate]'
})
export class PropogateDirective {

  @HostListener("click", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }

}
