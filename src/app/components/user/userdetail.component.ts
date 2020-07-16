import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-detail',
    template: `
    <div class="form-group">
        <div *ngFor="let a of users" ><b>First Name:</b> {{a.first_name}}</div>
    </div>`
})

export class UserDetailComponent implements OnInit {
    @Input() users: Array<User> = [];
    
    constructor(private route: ActivatedRoute){}
    ngOnInit(): void {
        
    }
}