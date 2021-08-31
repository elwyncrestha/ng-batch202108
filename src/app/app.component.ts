import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Inventory Management System';

  constructor(private readonly userService: UserService) {

  }

  handleNavClicked(nav: string) {
    console.log(nav);
  }
}
