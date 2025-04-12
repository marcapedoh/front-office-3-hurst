import { createAction } from "@ngrx/store";
import { OrderDTO } from "../models/orderDTO.models";
import { ResponseDTO } from "../models/responseDTO";


export const createOrder = createAction("[Order] placeOrder", (orderDTO: any) => (orderDTO))
export const createOrderSuccess = createAction("[Order] placeOrder Success", (responseDTO: ResponseDTO) => (responseDTO))
export const createOrderFailure = createAction("[Order] placeOrder Failure", (error: any) => error)
export const updateOrderStatus = createAction("[Order] updateOrderStatus", (orderId: string, status: string, removeProduitId: string[]) => ({ orderId, status, removeProduitId }))
export const updateOrderStatusSuccess = createAction("[Order] updateOrderStatus success", (responseDTO: any) => (responseDTO))
export const updateOrderStatusFailure = createAction("[Order] updateOrderStatus failure", (error: any) => ({ error }))
