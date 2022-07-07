import { User } from '../../models/entities/User';
import { AuthActionType } from './actions.constants';
import { StoreAction } from '../../models/commons/StoreAction';

export const authLoginAction = (payload: {
  email: string;
  password: string;
}): StoreAction<AuthActionType> => ({ type: AuthActionType.LOGIN, payload });

export const authLoginCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.LOGIN_COMPLETED,
  payload: user,
});

export const authLoginErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.LOGIN_ERROR,
  payload: message,
});

export const authFetchMeAction = (): StoreAction<AuthActionType> => ({
  type: AuthActionType.FETCH_ME,
});

export const authFetchMeCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.FETCH_ME_COMPLETED,
  payload: user,
});

export const authFetchMeErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.FETCH_ME_ERROR,
  payload: message,
});

export const authUpdateMeAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.UPDATE_ME,
  payload: user,
});

export const authUpdateMeCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.UPDATE_ME_COMPLETED,
  payload: user,
});

export const authUpdateMeErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.UPDATE_ME_ERROR,
  payload: message,
});

export const authChangePasswordAction = (payload: {
  old_password: string;
  password: string;
  password_confirmation: string;
}): StoreAction<AuthActionType> => ({
  type: AuthActionType.CHANGE_PASSWORD,
  payload,
});

export const authChangePasswordCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.CHANGE_PASSWORD_COMPLETED,
  payload: user,
});

export const authChangePasswordErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.CHANGE_PASSWORD_ERROR,
  payload: message,
});

export const authForgotPasswordAction = (payload: {
  email: string;
}): StoreAction<AuthActionType> => ({
  type: AuthActionType.FORGOT_PASSWORD,
  payload,
});

export const authForgotPasswordCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.FORGOT_PASSWORD_COMPLETED,
  payload: user,
});

export const authForgotPasswordErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.FORGOT_PASSWORD_ERROR,
  payload: message,
});

export const authResetPasswordAction = (): StoreAction<AuthActionType> => ({
  type: AuthActionType.RESET_PASSWORD,
});

export const authResetPasswordCompletedAction = (
  user: User
): StoreAction<AuthActionType> => ({
  type: AuthActionType.RESET_PASSWORD_COMPLETED,
  payload: user,
});

export const authResetPasswordErrorAction = (
  message: string
): StoreAction<AuthActionType> => ({
  type: AuthActionType.RESET_PASSWORD_ERROR,
  payload: message,
});

export const authLogoutAction = (): StoreAction<AuthActionType> => ({
  type: AuthActionType.LOGOUT,
});
