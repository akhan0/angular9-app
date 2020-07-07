import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';


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
  student: Student;
  students: Student[];


  constructor() { }

  ngOnInit(): void {
    this.students = [{ id: 1, firstName: 'Adil', lastName: 'khan', age: 34, dept: 'CS' },
    { id: 2, firstName: 'Arif', lastName: 'khan', age: 34, dept: 'CS' },
    { id: 3, firstName: 'Hamid', lastName: 'Ali', age: 34, dept: 'CS' },
    { id: 4, firstName: 'Shayan', lastName: 'Ahmad', age: 34, dept: 'CS' },];
    this.student = new Student();
    console.log(this.student)
  }

  resetform() {
    this.student.id = 0;
    this.btnLabel = "Add Student";
  }
  onSubmit() {
    if (this.id) {
      var s = this.students.filter(i => i.id == this.id);
      if (s.length > 0) {
        s[0].firstName = this.student.firstName;
        s[0].lastName = this.student.lastName;
        s[0].age = this.student.age;
        s[0].dept = this.student.dept;
      }
    }
    else {
      let _id = Math.floor(Math.random() * (1000 - 4 + 1)) + 4;
      this.students.push({ id: _id, firstName: this.student.firstName, lastName: this.student.lastName, age: this.student.age, dept: this.student.dept });
    }
  }
  selectStudent(id) {
    var s = this.students.filter(i => i.id == id);
    if (s.length > 0) {
      this.student.id = s[0].id;
      this.student.firstName = s[0].firstName;
      this.student.lastName = s[0].lastName;
      this.student.age = s[0].age;
      this.student.dept = s[0].dept;
      this.student.city = s[0].city;
      this.btnLabel = "Update Student";
    }
  }

}
