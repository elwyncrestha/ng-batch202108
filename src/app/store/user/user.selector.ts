import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { User } from './user.reducer';

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user: User) => user
);
