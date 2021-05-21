import {createSelector} from '@ngrx/store';
import {AppState} from './auth.state';
import {User} from '../models/user';

export const selectUser = createSelector(
  (state: AppState) => state.connectedUser,
  (connectedUser: User) => connectedUser
);
