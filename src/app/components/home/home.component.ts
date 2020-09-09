import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Fname:string='Tarak';
  Lname:string='Krishna';
  Age:number=21;
  Salary:number=30000;

  constructor() { }

  ngOnInit(): void {
  }

}
