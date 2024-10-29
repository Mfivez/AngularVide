import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html'
})
export class CustomDirectiveComponent {
  value: string = "Surligne-moi si tu peux !"
  isBright: boolean = false;

  setBright() {
    this.isBright = !this.isBright
  }
}
