import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html'
})
export class ChildInputComponent {
  @Input() message?: string;
}
