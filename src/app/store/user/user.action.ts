import { createAction, props } from '@ngrx/store';
import { User } from './user.reducer';

export class UserAction {
  static setUser = createAction('[UserAction] SET USER', props<{ user: User }>());
}
