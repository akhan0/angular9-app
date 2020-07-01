import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formTitle = "Angular 9 - Assignment Form";
  namePlaceholder = "Enter Name";
  emailPlaceholder = "Enter Email";
  dobPlaceholder = "Enter DOB";
  buttonText = "Submit";
  constructor() { }

  ngOnInit(): void {
  }

}
