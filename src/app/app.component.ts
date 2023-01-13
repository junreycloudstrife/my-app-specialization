import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation example
  title = 'Specialization'; 

  // Property binding example
  isDisabled = true; 

  // Event binding example
  sampleClick(){
    console.log("Sample button is clicked!");
  }

  // Two-way binding example
  inputValue = 0; 

  addEvent(){
    this.inputValue++;
  }

  subtractEvent(){
    this.inputValue--;
  }

  // Input parameter example
  numberValue = 10;

  // Output parameter example
  isEventReceived = "Not yet!";

  receiveEvent(){
    this.isEventReceived = "Event from SecondComponent received";
  }
}
