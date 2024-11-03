import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUsers(): {id: number, name: string}[] {
    return [
        { id: 1, name: 'Mauritcio' },
        { id: 2, name: 'Thomas' },
        { id: 3, name: 'Patrick Bruel' }
    ];
  }
}