import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inventory Management System';

  constructor() {

  }

  handleNavClicked(nav: string) {
    console.log(nav);
  }
}
