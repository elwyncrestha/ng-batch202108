import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserConstant } from 'src/app/constants/user.constant';
import { AppState } from 'src/app/store/app.reducer';
import { UserAction } from 'src/app/store/user/user.action';
import { User } from 'src/app/store/user/user.reducer';
import { selectUser } from 'src/app/store/user/user.selector';
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
    private readonly store: Store<AppState>
    ) {
  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
  }

  navClick(url: string): void {
    this.navClicked.emit(url);
    this.router.navigate([url]);
  }

  toggleUser(): void {
    let user: User;
    this.store.select(selectUser).subscribe((v) => user = v).unsubscribe();
    const newUser: User = user.id === UserConstant.JOHN_DOE.id ? UserConstant.JANE_DOE : UserConstant.JOHN_DOE;
    this.store.dispatch(UserAction.setUser({ user: newUser }));
  }

}
