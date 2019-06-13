import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user') user:UserModel;
  constructor() { }

  ngOnInit() {
  }

}
