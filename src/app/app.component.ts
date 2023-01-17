import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization'; 
  studentsList: Student[] = [
    {
      id:0,
      lastName: "Penduko",
      firstName: "Pedro",
      age: 20,
      nationality: "Filipino",
      gender: "Male"
    },
    {
      id:1,
      lastName: "Uzumaki",
      firstName: "Naruto",
      age: 18,
      nationality: "Japanese",
      degree: "Ninja",
      gender: "Male"
    },
    {
      id:2,
      lastName: "Dalisay",
      firstName: "Ricardo",
      age: 30,
      nationality: "Filipino",
      degree: "Police",
      gender: "Male"
    }
  ]

}
