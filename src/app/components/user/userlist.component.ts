import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {  
  users: Array<User> = [];
  selectedUsers: Array<User> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
      this.users = [];
    // this.users = [{ id: 1, firstName: 'Adil', lastName: 'khan', age: 34, dept: 'CS' },
    // { id: 2, firstName: 'Arif', lastName: 'khan', age: 34, dept: 'CS' },
    // { id: 3, firstName: 'Hamid', lastName: 'Ali', age: 34, dept: 'CS' },
    // { id: 4, firstName: 'Shayan', lastName: 'Ahmad', age: 34, dept: 'CS' },];
    this.getUser();
  }
  checkUser(){
    this.selectedUsers = [];
    this.users.forEach(i => {
      if(i.isChecked)
        this.selectedUsers.push(i);
    })
  }
  getUser(){
    this.httpClient.get("https://reqres.in/api/users?page=2")
            .subscribe(
              (val: any) => {
                this.users = val.data;
              },
              response => console.log(response)
              );
  }
}
