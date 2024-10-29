import { Component } from '@angular/core';

@Component({
  selector: 'correction-user-profile',
  templateUrl: './user-profile.component.html'
})
export class CorrectionUserProfileComponent {
  
  user = {
    firstName: 'dédé',
    lastName: 'Théthé',
    email: 'dédéThéthé@gmail.com'
  };

}
