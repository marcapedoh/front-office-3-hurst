import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalReturnService {

  constructor(private httpClient: HttpClient) { }

  callSuccessEndPoint(httpRequest: HttpParams) {
    console.log(httpRequest)
    return this.httpClient.get("http://188.213.130.121:8093/checkout/success", { params: httpRequest })
  }

  callFailureEndPoint(httpRequest: HttpParams) {
    return this.httpClient.get("http://188.213.130.121:8093/checkout/failure", { params: httpRequest })
  }
}
