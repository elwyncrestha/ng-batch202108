import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  defaultUser: User = { id: 0, name: 'John Doe' };
  authenticatedUser: Subject<User> = new BehaviorSubject<User>(this.defaultUser);

  constructor() {}
}
