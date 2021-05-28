import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './auth.state';

const getUserState = createFeatureSelector<AppState>('state');

export const getUser = createSelector(getUserState, (state) => state.connectedUser);
