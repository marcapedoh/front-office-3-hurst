import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrderService } from "src/app/services/order-service/order.service";
import { createOrder, createOrderFailure, createOrderSuccess, updateOrderStatus, updateOrderStatusFailure, updateOrderStatusSuccess } from "../actions/order.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { registerSuccess } from "../actions/auth.actions";
import { NotificationModel } from "src/app/models/notification.model";
import { WebNotificationService } from "src/app/services/Notification/web-notification.service";


@Injectable()
export class OrderEffects {

  placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(createOrder),
    concatMap((orderDTO) =>
      this.orderService.placeOrder(orderDTO).pipe(
        map((responseDTO) => createOrderSuccess(responseDTO)),
        catchError((error: string) => of(createOrderFailure(error)))
      )
    ), tap((action) => {
      if (action.type === '[Order] placeOrder Success') {
        this.router.navigate(["checkout"]);
        let notification: NotificationModel = new NotificationModel();
        notification.message = "order place successfully";
        notification.status = "success";
        this.webNotification.emitNotification(notification)
        localStorage.removeItem("cart")
      } else {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "Error when creating your order. maybe it's due to network issue or your credentials have expired!";
        notification.status = "danger";
        this.webNotification.emitNotification(notification)
      }
    })
  ))

  updateOrderStatus$ = createEffect(() => this.actions$.pipe(
    ofType(updateOrderStatus),
    concatMap(({ orderId, status, removeProduitId }) =>
      this.orderService.updateOrderStatus(orderId, status, removeProduitId).pipe(
        map((responseDTO) => updateOrderStatusSuccess(responseDTO)),
        catchError((error: string) => of(updateOrderStatusFailure({ error })))
      )
    ), tap((action) => {
      if (action.type === "[Order] updateOrderStatus success") {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "order updated successfully";
        notification.status = "success";
        this.webNotification.emitNotification(notification)
      } else {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "order updated with failure";
        notification.status = "danger";
        this.webNotification.emitNotification(notification)
      }
    })
  ))

  constructor(private actions$: Actions, private orderService: OrderService, private router: Router, private webNotification: WebNotificationService) { }
}
