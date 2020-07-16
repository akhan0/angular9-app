import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    template: `
    <div class="form-group">
        <label for="firsNname">First Name</label>
        <input type="text" class="form-control" id="firsNname" required [value]="user.first_name" name="firsNname">
    </div>
    <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" required [value]="user.last_name" name="lastName">
    </div>`
})

export class UserComponent implements OnInit {
    user: User;
    users: User[];
    id: number;
    btnLabel = "Add User";
    constructor(private route: ActivatedRoute){}
    ngOnInit(): void {
        this.users = [];
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
            s[0].first_name = this.user.first_name;
            s[0].last_name = this.user.last_name;
          }
        }
        else {
          let _id = Math.floor(Math.random() * (1000 - 4 + 1)) + 4;
          this.users.push({ id: _id, first_name: this.user.first_name, last_name: this.user.last_name });
        }
      }
}