import { Component} from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';


@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent{

  constructor(public readonly nav: NavigateService) {} 

}