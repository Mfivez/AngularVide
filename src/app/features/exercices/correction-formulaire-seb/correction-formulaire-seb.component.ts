import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-correction-formulaire-seb',
  templateUrl: './correction-formulaire-seb.component.html',
  styleUrl: './correction-formulaire-seb.component.scss'
})
export class CorrectionFormulaireSebComponent {
  constructor(public readonly nav: NavigateService) {}
}
