import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { OrderDTO } from 'src/app/components/auth/store/models/orderDTO.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  placeOrder(order: any): Observable<any> {
    return this.httpClient.post('http://188.213.130.121:8089/order/placeOrder', order.order, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        localStorage.setItem('orderId', response.body.data)
      })
    );
  }

  updateOrderStatus(orderId: string, status: string, removeProductId: string[]) {
    let params = new HttpParams()
      .set('status', status);
    if (removeProductId && removeProductId.length > 0) {
      removeProductId.forEach((productId) => {
        params = params.append('removeProductId', productId);
      });
    } else {
      params = params.set('removeProductId', '');
    }
    console.log(params)
    //
    return this.httpClient.post(`http://188.213.130.121:8089/order/updateOrderStatus/${orderId}?${params.toString()}`, null)
  }
}
