import { createReducer, on } from "@ngrx/store";
import { createOrder, createOrderFailure, createOrderSuccess, updateOrderStatus, updateOrderStatusFailure, updateOrderStatusSuccess } from "../actions/order.actions";
import { OrderDTO } from "../models/orderDTO.models";


export interface OrderState {
  orders: ReadonlyArray<OrderDTO>;
}

export const initialOrderState: ReadonlyArray<OrderDTO> = []

export const orderReducer = createReducer(
  initialOrderState,
  on(createOrder, (state) => ({ ...state })),
  on(createOrderSuccess, (state, responseDTO) => ({ ...state, responseDTO })),
  on(createOrderFailure, (state, { error }) => ({ ...state, error })),
  on(updateOrderStatus, (state, { orderId, status, removeProduitId }) => ({ ...state, orderId, status, removeProduitId })),
  on(updateOrderStatusSuccess, (state, { responseDTO }) => ({ ...state, responseDTO })),
  on(updateOrderStatusFailure, (state, { error }) => ({ ...state, error }))
)
