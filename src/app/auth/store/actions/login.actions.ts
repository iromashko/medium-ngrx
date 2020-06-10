import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ request: CurrentUserInterface }>()
);
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
