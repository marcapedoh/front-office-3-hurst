import { createAction } from "@ngrx/store";
import { ResponseDTO } from "../models/responseDTO";
import { RegistrationRequest } from "../models/registrationRequest";
import { AuthRequest } from "../reducers/auth.reducers";


export const login = createAction("[Auth] login", (authRequest:AuthRequest) => (authRequest));
export const loginSuccess = createAction("[Auth] loginSuccess", (responseDTO: ResponseDTO) => ({ responseDTO }));
export const loginFailure = createAction("[Auth] loginFailure", (error: any) => ({ error }));
export const logout = createAction("[Auth] logout");

export const register = createAction("[Register] Register user", (registerRequest: RegistrationRequest) => (registerRequest));
export const registerSuccess = createAction("[Register] RegisterSuccess user", (registrationRequest: RegistrationRequest) => ({ registrationRequest }));
export const registerFailure = createAction("[Register] RegisterFailure user", (error: string) => ({ error }));
