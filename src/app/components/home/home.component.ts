import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscriptionFormEmail: string = '';
  subscriptionFormAlternateEmail: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  subscriptionFormSubmit(form): void {
    console.log(form.value);
  }

}
