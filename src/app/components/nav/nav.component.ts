import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { HEADER_NAVS } from './navs.constant';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navTitle: string;
  @Output() navClicked: EventEmitter<string> = new EventEmitter<string>();

  navs = HEADER_NAVS;
  user$: Observable<User>;


  constructor(
    private readonly router: Router,
    private readonly userService: UserService
    ) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.authenticatedUser.asObservable();
    this.user$.subscribe((v) => console.log(v));
  }

  navClick(url: string): void {
    this.navClicked.emit(url);
    this.router.navigate([url]);
  }

}
