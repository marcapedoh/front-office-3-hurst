import { Component, OnInit } from '@angular/core';
import { generateId } from 'src/app/helpers/utils';
import { NotificationModel } from 'src/app/models/notification.model';
import { WebNotificationService } from 'src/app/services/Notification/web-notification.service';

@Component({
  selector: 'app-web-notification',
  templateUrl: './web-notification.component.html',
  styleUrls: ['./web-notification.component.css']
})
export class WebNotificationComponent implements OnInit{
  notifications: NotificationModel[]=[]
  constructor(private notificationService: WebNotificationService) { }

  ngOnInit(): void {
    this.notificationService.notification$.subscribe({
      next: (notification: NotificationModel) => {
        notification.id=generateId()
        const audio= document.createElement('audio');
        audio.src='assets/audios/success.wav'
        audio.play();
        if (notification.message) {
          this.notifications?.push(notification)
          setTimeout(()=>{
            this.notifications=this.notifications?.filter((notif:NotificationModel)=> notif.id!==notification.id)
          },notification.timeout)
        }
      }
    })
  }
}
