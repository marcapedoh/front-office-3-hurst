import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Compare } from 'src/app/models/compare.models';
import { WebNotificationService } from '../Notification/web-notification.service';
import { generateId } from 'src/app/helpers/utils';
import { product } from 'src/app/components/auth/store/models/product.model';
import { NotificationModel } from 'src/app/models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  compare: Compare = new Compare();
  compare$ = new BehaviorSubject<any>(this.compare)
  constructor(private notificationService: WebNotificationService) {
    const compare = localStorage.getItem("compare");
    if (compare) {
      this.compare$.next(JSON.parse(compare))
      this.compare = JSON.parse(compare)
    } else {
      this.compare.id = generateId();
      this.compare.articles = []
    }
  }

  addProduct(produit: any) {
    const isExistInCompare = this.compare.articles?.findIndex((product: any) => product.name === produit.name)
    console.log(isExistInCompare, produit)
    if (isExistInCompare == -1) {

      this.compare.articles.push(produit)

      this.updateData()
    }
    let notification: NotificationModel = new NotificationModel();
    notification.message = product.name + " added for comparison ";
    notification.status = "success";

    this.notificationService.emitNotification(notification)

  }
  removeProduit(produit: any) {
    this.compare.articles = this.compare.articles?.filter((product: any) => product.name !== produit.name)
    let notification: NotificationModel = new NotificationModel();
    notification.message = product.name + " deleted from cart ";
    notification.status = "danger";

    this.notificationService.emitNotification(notification)
    this.updateData();
  }

  updateData() {
    localStorage.setItem("compare", JSON.stringify(this.compare))
    this.compare$.next(this.compare)
  }
}
