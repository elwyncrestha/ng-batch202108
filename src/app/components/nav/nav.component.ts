import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navTitle: string;
  @Output() navClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
    ) {
  }

  ngOnInit(): void {
  }

  navClick(url: string): void {
    this.navClicked.emit(url);
    this.router.navigate([url]);
  }

}
