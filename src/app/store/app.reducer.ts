import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { REDUCER_TOKEN } from './store.constant';
import { User, userReducer } from './user/user.reducer';

export interface AppState {
  user: User;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};

export const appReducerToken = new InjectionToken<ActionReducerMap<AppState>>(REDUCER_TOKEN.appReducer);

export function getAppReducers(): ActionReducerMap<AppState> {
  return reducers;
}
