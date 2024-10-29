import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie4',
  templateUrl: './theorie4.component.html'
})
export class Theorie4Component {
  constructor(public readonly nav: NavigateService) {}
}
