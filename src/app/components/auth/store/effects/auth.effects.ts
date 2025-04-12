import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth/auth.service";
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from "../actions/auth.actions";
import { catchError, concatMap, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { WebNotificationService } from "src/app/services/Notification/web-notification.service";
import { NotificationModel } from "src/app/models/notification.model";


@Injectable()
export class AuthEffects {


  authenticateUser$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap((authRequest) =>
      this.authService.login(authRequest).pipe(
        map((responseDTO) => loginSuccess(responseDTO)),
        catchError((error: string) => of(loginFailure(error)))
      )), tap((action) => {
        if (action.type === '[Auth] loginSuccess') {
          this.router.navigate(['account'])
        } else {
          let notification: NotificationModel = new NotificationModel();
          notification.message = "Authentication failed try to verify your credentials ";
          notification.status = "danger";
          this.webNotification.emitNotification(notification)
        }
      })
  ))

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    concatMap((registrationRequest) =>
      this.authService.register(registrationRequest).pipe(
        map((responseDTO) => registerSuccess(responseDTO)),
        catchError((error: string) => of(registerFailure(error)))
      )
    ), tap((action) => {
      if (action.type === '[Register] RegisterSuccess user') {
        this.router.navigate(['signin'])
      }
    })
  )
  );
  constructor(private actions$: Actions, private authService: AuthService, private router: Router, private webNotification: WebNotificationService) { }
}
