import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html'
})
export class Demo13Component {
  constructor(public readonly nav : NavigateService) {}

}
