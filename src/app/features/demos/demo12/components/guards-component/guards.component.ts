import { Component } from '@angular/core';
import { LoginService } from '../../tools/services/login.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html'
})
export class GuardsComponent {
  isConnected: boolean = false

  constructor (private _loginService: LoginService) { }

  ngOnInit (): void {
    this.isConnected = this._loginService.isConnected
  }

  login (): void {
    this._loginService.logIn()
    this.isConnected = this._loginService.isConnected
  }

  logout (): void {
    this._loginService.logOut()
    this.isConnected = this._loginService.isConnected
  }

}
