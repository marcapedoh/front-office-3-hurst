import { createAction } from "@ngrx/store";


export const checkoutCreate = createAction("[Paypal] paypal order initialization", (orderDTO: any) => (orderDTO))
export const checkoutCreateSuccess = createAction("[Paypal] Paypal order place successfully", (responseDTO: any) => (responseDTO))
export const checkoutCreateFailure = createAction("[Paypal] Paypal order place failed", (error: any) => ({ error }))
export const checkoutSuccess = createAction("[Paypal] Paypal cart paid", (payerId: string, token: string) => ({ payerId, token }))
export const checkoutSuccessSuccess = createAction("[Paypal] Paypal cart paid Success", (responseDTO: any) => (responseDTO))
export const checkoutSuccessFailure = createAction("[Paypal] Paypal cart paid failure", (error: any) => ({ error }))
export const checkoutFailure = createAction("[Paypal] paypal cart paid for failure case", (payerId: string, token: string) => ({ payerId, token }))
export const checkoutFailureSuccess = createAction("[Paypal] cart paid for failure case success", (responseDTO: any) => (responseDTO))
export const checkoutFailurewithFailure = createAction("[Paypal] cart paid for failure case failed", (error: any) => ({ error }))
