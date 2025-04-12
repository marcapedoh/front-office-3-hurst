import { createReducer, on } from "@ngrx/store";
import { RegistrationRequest } from "../models/registrationRequest";
import { register, registerFailure, registerSuccess } from "../actions/auth.actions";

export interface RegisterState {
  registrationRequest: RegistrationRequest;
}

const initialState: ReadonlyArray<RegisterState> = []

export const registerReducer = createReducer(
  initialState,
  on(register, (state) => ({ ...state })),
  on(registerSuccess, (state, responseDTO) => ({ ...state, responseDTO })),
  on(registerFailure, (state, { error }) => ({ ...state, error }))
)
