import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component {
  
  constructor(public nav: NavigateService) {}
}
