import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  //standalone: true,
  //imports: [],
  templateUrl: './challenge3.component.html',
  styleUrl: './challenge3.component.css'
})
export class Challenge3Component {
  model = { email: '', password: '' };

  onSubmit() {
    // Add your login logic here
    console.log('Form submitted', this.model);
  }
}
