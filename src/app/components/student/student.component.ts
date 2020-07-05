import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dept: string;
  btnLabel = "Add Student";


  student = [{ id: 1, firstName: 'Adil', lastName: 'khan', age: 34, dept: 'CS' },
  { id: 2, firstName: 'Arif', lastName: 'khan', age: 34, dept: 'CS' },
  { id: 3, firstName: 'Hamid', lastName: 'Ali', age: 34, dept: 'CS' },
  { id: 4, firstName: 'Shayan', lastName: 'Ahmad', age: 34, dept: 'CS' },];

  constructor() { }

  ngOnInit(): void {
  }
  resetform() {
    this.id = 0;
    this.btnLabel = "Add Student";
  }
  onSubmit() {
    if (this.id) {
      var student = this.student.filter(i => i.id == this.id);
      if(student.length > 0)
      {
        student[0].firstName = this.firstName;
        student[0].lastName = this.lastName;
        student[0].age = this.age;
        student[0].dept = this.dept;
      }
    }
    else {
      let _id = Math.floor(Math.random() * (1000 - 4 + 1)) + 4;
      this.student.push({ id: _id, firstName: this.firstName, lastName: this.lastName, age: this.age, dept: this.dept });
    }
  }
  selectStudent(id) {
    var student = this.student.filter(i => i.id == id);
    if (student.length > 0) {
      this.id = student[0].id;
      this.firstName = student[0].firstName;
      this.lastName = student[0].lastName;
      this.age = student[0].age;
      this.dept = student[0].dept;
      this.btnLabel = "Update Student";
    }
  }

}
