import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationModel } from 'src/app/models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class WebNotificationService {

  notification = new NotificationModel();
  notification$ = new BehaviorSubject<NotificationModel>(this.notification)
  constructor() { }

  emitNotification(notification:NotificationModel){
    this.notification$.next(notification);
  }
}
