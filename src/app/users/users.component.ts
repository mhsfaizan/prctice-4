import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UserModel[];
  constructor(private userServeice:UserService) { }

  ngOnInit() {
    this.users = this.userServeice.getUsers();
  }

}
