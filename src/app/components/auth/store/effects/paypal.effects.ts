import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WebNotificationService } from "src/app/services/Notification/web-notification.service";
import { TokenService } from "src/app/services/token-service/token.service";
import { checkoutCreate, checkoutCreateFailure, checkoutCreateSuccess, checkoutFailure, checkoutFailureSuccess, checkoutFailurewithFailure, checkoutSuccess, checkoutSuccessFailure, checkoutSuccessSuccess } from "../actions/payapl.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { PaypalService } from "src/app/services/paypal-service/paypal.service";
import { NotificationModel } from "src/app/models/notification.model";
import { PaypalReturnService } from "src/app/services/paypay-return/paypal-return.service";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class PaypalEffects {

  registerOrderOnPayPal$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutCreate),
    concatMap((orderDTO) =>
      this.payPalService.checkoutCreate(orderDTO).pipe(
        map((responseDTO) => checkoutCreateSuccess(responseDTO)),
        catchError((error: string) => of(checkoutCreateFailure(error)))
      )
    ), tap((action) => {
      if (action.type === '[Paypal] Paypal order place successfully') {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "Paypal order place successfully";
        notification.status = "success";
        this.webNotification.emitNotification(notification)

        let notificationTwo: NotificationModel = new NotificationModel();
        notification.message = "you'll be redirected to paypal in " + this.countdown + " seconds";
        notification.status = "warning";
        this.webNotification.emitNotification(notificationTwo)
      } else {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "error when trying to place order in paypal context";
        notification.status = "danger";
        this.webNotification.emitNotification(notification)
      }
    })
  )
  )

  checkoutSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutSuccess),
    concatMap(({ token, payerId }) =>
      this.paypalReturns.callSuccessEndPoint(new HttpParams().set("token", token).set("payerId", payerId)).pipe(
        map((responseDTO) => checkoutSuccessSuccess(responseDTO)),
        catchError((error: string) => of(checkoutSuccessFailure({ error })))
      )
    ), tap((action) => {
      if (action.type === "[Paypal] Paypal cart paid Success") {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "Your payment is effective successfully";
        notification.status = "success";
        this.webNotification.emitNotification(notification)
      }
    })
  ))
  checkoutFailure$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutFailure),
    concatMap(({ payerId, token }) =>
      this.paypalReturns.callFailureEndPoint(new HttpParams().set("token", token).set("PayerID", payerId)).pipe(
        map((responseDTO) => checkoutFailureSuccess(responseDTO)),
        catchError((error: string) => of(checkoutFailurewithFailure({ error })))
      )
    ), tap((action) => {
      if (action.type === "[Paypal] cart paid for failure case success") {
        let notification: NotificationModel = new NotificationModel();
        notification.message = "Your order is not paid successfully";
        notification.status = "danger";
        this.webNotification.emitNotification(notification)
      }
    })
  ))
  constructor(private actions$: Actions, private tokenService: TokenService, private webNotification: WebNotificationService, private payPalService: PaypalService, private paypalReturns: PaypalReturnService) { }
  countdown = 5
  private decrementCountdown(): void {
    if (this.countdown > 0) {
      setTimeout(() => {
        this.countdown--;
        this.decrementCountdown();
      }, 1000);
    }
  }
}
