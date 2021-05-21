import {createAction, props} from '@ngrx/store';

export const setUser = createAction(
  'set connected user',
  props<{ connectedUser }>()
);

export const removeUser = createAction(
  'remove connected user',
  props<{ connectedUser }>()
);
