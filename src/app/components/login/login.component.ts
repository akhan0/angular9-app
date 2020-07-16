import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  
  login(){
    console.log('he')
    this.httpClient.post("https://reqres.in/api/login", {"email": this.email, "password": this.password})
            .subscribe(
              (val) => {
                this.router.navigate(["userlist"]);
              },
              response => console.log(response)
              );
  }
}
