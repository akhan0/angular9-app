import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {  
  users: User[];


  constructor() { }

  ngOnInit(): void {
    this.users = [{ id: 1, firstName: 'Adil', lastName: 'khan', age: 34, dept: 'CS' },
    { id: 2, firstName: 'Arif', lastName: 'khan', age: 34, dept: 'CS' },
    { id: 3, firstName: 'Hamid', lastName: 'Ali', age: 34, dept: 'CS' },
    { id: 4, firstName: 'Shayan', lastName: 'Ahmad', age: 34, dept: 'CS' },];
  }
}
