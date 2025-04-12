import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price: number, product: any): any {
    const {currency}=product
    return new Intl.NumberFormat('fr-Fr',{style:"currency",currency:currency}).format(price);
  }

}
