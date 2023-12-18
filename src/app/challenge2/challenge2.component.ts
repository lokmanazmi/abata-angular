import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Challenge3Component } from '../challenge3/challenge3.component';

@Component({
  selector: 'app-challenge2',
  //standalone: true,
  //imports: [],
  templateUrl: './challenge2.component.html',
  styleUrl: './challenge2.component.css'
})
export class Challenge2Component {
  submitForm() {
    // Implement your form submission logic here
    console.log('Form submitted!');
  }
}
