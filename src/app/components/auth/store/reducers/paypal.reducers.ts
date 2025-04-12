import { createReducer, on } from "@ngrx/store";
import { checkoutCreate, checkoutCreateFailure, checkoutCreateSuccess, checkoutFailure, checkoutFailureSuccess, checkoutFailurewithFailure, checkoutSuccess, checkoutSuccessFailure, checkoutSuccessSuccess } from "../actions/payapl.actions";


export interface PaypalState {
  paypalOrder: any;
}

export const initialState: ReadonlyArray<any> = []

export const paypalReducer = createReducer(
  initialState,
  on(checkoutCreate, (state) => ({ ...state })),
  on(checkoutCreateSuccess, (state, responseDTO) => ({ ...state, responseDTO })),
  on(checkoutCreateFailure, (state, { error }) => ({ ...state, error })),
  on(checkoutSuccess, (state, { token, payerId }) => ({ ...state, token, payerId })),
  on(checkoutSuccessSuccess, (state, { responseDTO }) => ({ ...state, responseDTO })),
  on(checkoutSuccessFailure, (state, { error }) => ({ ...state, error })),
  on(checkoutFailure, (state, { payerId, token }) => ({ ...state, token, payerId })),
  on(checkoutFailureSuccess, (state, { responseDTO }) => ({ ...state, responseDTO })),
  on(checkoutFailurewithFailure, (state, { error }) => ({ ...state, error }))
)
