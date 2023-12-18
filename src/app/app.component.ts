import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-fact';

  breeds: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(data => {
      this.breeds = data.data;
    });
  }
}
