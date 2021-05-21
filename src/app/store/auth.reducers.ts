import { createReducer, on } from '@ngrx/store';
import {AppState} from './auth.state';
import {setUser, removeUser} from './auth.actions';

export const initialState: AppState = {
  connectedUser: null
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { connectedUser }) => connectedUser),
  on(removeUser, (state, { connectedUser }) => null)
);
