import {
  Directive, HostBinding, Input,
} from '@angular/core';

@Directive({
  selector: '[appCompleted]',
})
export class CompletedDirective {
  @Input('appCompleted') completed: boolean;

  @HostBinding('style.textDecoration') get getTextDecoration() {
    return this.completed ? 'line-through' : 'none';
  }
}
