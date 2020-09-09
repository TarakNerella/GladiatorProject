import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserTable[];

  constructor(private _userService: UserService, private router:Router) { }

  ngOnInit(): void {

    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  addUser(){
    this.router.navigate(['adduser']);
  }
  getAllUsersFun() 
  {
    this._userService.getAllUsers().subscribe(data => { this.users = data });
  }
}
