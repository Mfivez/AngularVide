import { Component, OnInit } from '@angular/core';
import { UserService } from '../../tools/my-service.service';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrl: './component-test.component.scss'
})
export class ComponentTestComponent implements OnInit {
  users: {id: number, name: string}[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
