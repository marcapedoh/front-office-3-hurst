import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/components/auth/store/models/product.model';
import { generateId } from 'src/app/helpers/utils';
import { Cart } from 'src/app/models/cart';
import { NotificationModel } from 'src/app/models/notification.model';
import { WebNotificationService } from '../Notification/web-notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart();
  cart$ = new BehaviorSubject<any>(this.cart)
  constructor(private notificationService: WebNotificationService) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      this.cart$.next(JSON.parse(cart))
      this.cart = JSON.parse(cart)
    } else {
      this.cart._id = generateId();
    }
  }
  addProduct(product: any, quantityParam: number = 1) {
    const productIndex = this.cart.articles.findIndex((produit: any) => produit.name == product.name)
    console.log(productIndex)
    if (productIndex !== -1) {

      this.cart.articles[productIndex].quantity++;

      this.updateCart()
    } else {
      this.cart.articles.push({ ...product, quantity: quantityParam });

      let notification: NotificationModel = new NotificationModel();
      notification.message = product.name + " added to cart ";
      notification.status = "success";

      this.notificationService.emitNotification(notification)
      this.updateCart()
    }
  }

  updateCart() {
    this.cart.quantity = 0
    this.cart.total = 0;

    this.cart.articles.forEach((product: any) => {
      this.cart.quantity += product.quantity
      if (product) {
        this.cart.total += product.features[0].salePrice * product.quantity
      }
    })
    this.cart.total = parseFloat(this.cart.total.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.cart$.next(this.cart)
  }
  removeProduct(product: any, quantity: number = 1) {
    const productIndex = this.cart.articles.findIndex((produit: any) => produit.name == product.name)

    if (productIndex !== -1) {
      if (this.cart.articles[productIndex].quantity == 1) {
        this.cart.articles = this.cart.articles.filter((produit: any) => produit.name !== product.name)
      } else {
        if (this.cart.articles[productIndex].quantity > quantity) {
          this.cart.articles[productIndex].quantity -= quantity
        } else {
          this.cart.articles = this.cart.articles.filter((produit: any) => produit.name !== product.name)
        }
      }
      let notification: NotificationModel = new NotificationModel();
      notification.message = product.name + " removed from cart ";
      notification.status = "danger";

      this.notificationService.emitNotification(notification)
      this.updateCart()
    }
  }

  setProductQuantity(product: any, quantityParam: number) {
    const productIndex = this.cart.articles.findIndex((produit: any) => produit.name == product.name)
    if (productIndex !== -1) {

      this.cart.articles[productIndex].quantity = quantityParam;


      let notification: NotificationModel = new NotificationModel();
      notification.message = product.name + " update quantity to cart ";
      notification.status = "warning";

      this.notificationService.emitNotification(notification)
      this.updateCart()
    }
  }
}
