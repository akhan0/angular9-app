import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    template: `
    <div class="form-group">
        <label for="firsNname">First Name</label>
        <input type="text" class="form-control" id="firsNname" required [value]="user.firstName" name="firsNname">
    </div>
    <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" required [value]="user.lastName" name="lastName">
    </div>
    <div class="form-group">
        <label for="age">Age</label>
        <input type="number" min="10" max="50" class="form-control" id="age" required [value]="user.age" name="age">
    </div>
    <div class="form-group">
        <label for="dept">Department</label>
        <input type="text" class="form-control" id="dept" required [value]="user.dept" name="dept">
    </div>`
})

export class UserComponent implements OnInit {
    user: User;
    users: User[];
    id: number;
    btnLabel = "Add User";
    constructor(private route: ActivatedRoute){}
    ngOnInit(): void {
        this.users = [{ id: 1, firstName: 'Adil', lastName: 'khan', age: 34, dept: 'CS' },
        { id: 2, firstName: 'Arif', lastName: 'khan', age: 34, dept: 'CS' },
        { id: 3, firstName: 'Hamid', lastName: 'Ali', age: 34, dept: 'CS' },
        { id: 4, firstName: 'Shayan', lastName: 'Ahmad', age: 34, dept: 'CS' },];
        this.user = new User();
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
         });
         this.user = this.users.filter(i => i.id = this.id)[0];
         console.log(this.user);
    }
    resetform() {
        this.user.id = 0;
        this.btnLabel = "Add user";
      }
      onSubmit() {
        if (this.id) {
          var s = this.users.filter(i => i.id == this.id);
          if (s.length > 0) {
            s[0].firstName = this.user.firstName;
            s[0].lastName = this.user.lastName;
            s[0].age = this.user.age;
            s[0].dept = this.user.dept;
          }
        }
        else {
          let _id = Math.floor(Math.random() * (1000 - 4 + 1)) + 4;
          this.users.push({ id: _id, firstName: this.user.firstName, lastName: this.user.lastName, age: this.user.age, dept: this.user.dept });
        }
      }
}