import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private httpClient: HttpClient) { }

  checkoutCreate(orderDTO: any) {
    return this.httpClient.post('http://188.213.130.121:8093/checkout/create', orderDTO.orderDTO, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        const checkoutLink = response.body.data.links[1]?.href;
        if (checkoutLink) {
          //window.location.href = checkoutLink;
          const userConfirmed = window.confirm('Would you like to be redirect to paypal URL to continue ?');
          if (userConfirmed) {

            window.location.href = checkoutLink;
          } else {
            window.location.href = '/checkout';
            console.log('Redirection annulée par l\'utilisateur');
          }
        } else {
          console.error('Checkout link not found in the response');
        }
      })
    );
  }
}
