import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitProductService {

  product: any;
  constructor() { }

  emitProduct(product: any) {
    this.product = product;
  }
}
