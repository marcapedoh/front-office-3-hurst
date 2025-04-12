import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../services/token-service/token.service';
import { NotificationModel } from '../models/notification.model';
import { WebNotificationService } from '../services/Notification/web-notification.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  PUBLIC_URL = {
    login: `http://188.213.130.121:8888/clients/login`,
    register: `http://188.213.130.121:8085/clients/register`
  }
  constructor(private router: Router, private tokenService: TokenService, private webNotification: WebNotificationService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('I intercept it');
    if (!(request.url.includes(this.PUBLIC_URL.login)) && !(request.url.includes(this.PUBLIC_URL.register))) {
      const authToken = JSON.parse(localStorage.getItem('token')!);
      //console.log(`Bearer ${authToken}`);
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return this.handleRequest(authReq, next);
    }
    return this.handleRequest(request, next);
  }
  handleRequest(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(tap((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse) {

      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401 || error.status === 403 || error.status === 500) {
        if (!this.tokenService.isTokenValid(localStorage.getItem('token')!) && localStorage.getItem('token')!) {
          let notification: NotificationModel = new NotificationModel();
          notification.message = "your token expired you need to authenticate again.";
          notification.status = "danger";
          this.webNotification.emitNotification(notification)
          this.router.navigate(['signin']);
        }
      }
    }))
  }
}

