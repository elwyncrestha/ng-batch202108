import { createReducer, on } from '@ngrx/store';
import { UserConstant } from 'src/app/constants/user.constant';
import { UserAction } from './user.action';

export interface User {
  id: number;
  name: string;
}

const initialState: User = UserConstant.JOHN_DOE;

export const userReducer = createReducer(
  initialState,
  on(UserAction.setUser, (state, { user }) => ({...state, ...user}))
);
