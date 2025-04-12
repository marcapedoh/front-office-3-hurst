import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wish } from 'src/app/models/wish';
import { WebNotificationService } from '../Notification/web-notification.service';
import { generateId } from 'src/app/helpers/utils';
import { NotificationModel } from 'src/app/models/notification.model';
import { CartService } from '../cart-service/cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  wish: Wish = new Wish();
  wish$ = new BehaviorSubject<any>(this.wish)
  constructor(private notificationService: WebNotificationService, private cartService: CartService) {
    const wish = localStorage.getItem("wish");
    if (wish) {
      this.wish$.next(JSON.parse(wish))
      this.wish = JSON.parse(wish)
    } else {
      this.wish._id = generateId();
    }
  }

  addToCart(product: any) {
    this.removeProduct(product);
    this.cartService.addProduct(product, product.quantity);
  }

  addProduct(product: any, quantityParam: number = 1) {
    const productIndex = this.wish.articles.findIndex((produit: any) => produit.name == product.name)
    if (productIndex !== -1) {

      this.wish.articles[productIndex].quantity++;

      this.updateWish()
    } else {
      this.wish.articles.push({ ...product, quantity: quantityParam });

      let notification: NotificationModel = new NotificationModel();
      notification.message = product.name + " added to wish ";
      notification.status = "success";

      this.notificationService.emitNotification(notification)
      this.updateWish()
    }
  }

  updateWish() {
    this.wish.quantity = 0
    this.wish.total = 0;

    this.wish.articles.forEach((product: any) => {
      this.wish.quantity += product.quantity
      if (product) {
        this.wish.total += product.features[0].salePrice * product.quantity
      }
    })
    localStorage.setItem("wish", JSON.stringify(this.wish))
    this.wish$.next(this.wish)
  }
  removeProduct(product: any, quantity: number = 1) {
    const productIndex = this.wish.articles.findIndex((produit: any) => produit.name == product.name)

    if (productIndex !== -1) {
      if (this.wish.articles[productIndex].quantity == 1) {
        this.wish.articles = this.wish.articles.filter((produit: any) => produit.name !== product.name)
      } else {
        if (this.wish.articles[productIndex].quantity > quantity) {
          this.wish.articles[productIndex].quantity -= quantity
        } else {
          this.wish.articles = this.wish.articles.filter((produit: any) => produit.name !== product.name)
        }
      }
      let notification: NotificationModel = new NotificationModel();
      notification.message = product.name + " removed from wish ";
      notification.status = "danger";

      this.notificationService.emitNotification(notification)
      this.updateWish()
    }
  }
}
