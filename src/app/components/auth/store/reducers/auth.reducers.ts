import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, logout } from "../actions/auth.actions";


export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthState {
  user: AuthRequest;
}

const initialState: ReadonlyArray<AuthState> = []

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state })),
  on(loginSuccess, (state, responseDTO) => ({ ...state, responseDTO })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, () => initialState)
);
