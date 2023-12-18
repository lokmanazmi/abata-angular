import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breeds: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(data => {
      this.breeds = data.data;
    });
  }
}
