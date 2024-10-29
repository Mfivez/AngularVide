import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html'
})
export class Demo11Component {
  constructor(public readonly nav: NavigateService) {}
}
    