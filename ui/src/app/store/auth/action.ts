import { createAction, props } from '@ngrx/store';
import { SignUp } from '../../data/sign-up';

export const logIn = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const logInSuccess = createAction('[Auth] Login Success');
export const logInFailure = createAction('[Auth] Login Failure', props<{ error: any }>());
export const signUp = createAction('[Auth] Sign up', props<SignUp>());
export const signUpFailure = createAction('[Auth] Sign up Failure', props<{ error: any }>());
export const signUpSuccess = createAction('[Auth] Sign up Success');
export const logOut = createAction('[Auth] Logout');
export const resetErrorMessage = createAction('[Auth] Reset Error Message');