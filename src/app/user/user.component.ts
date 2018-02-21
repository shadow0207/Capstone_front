import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUser();
    this.getUsers();

  }
  getUsers() {
    console.log("check");
    this.userService.getUser().subscribe(data => {
      this.users = data.json();
      console.log("user length" + this.users.length);
    });
  }


}
