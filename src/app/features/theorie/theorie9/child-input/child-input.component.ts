import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrl: './child-input.component.scss'
})
export class ChildInputComponent {
  @Input() message?: string;
}
