import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSoldeRate'
})
export class FormatSoldeRatePipe implements PipeTransform {

  transform(product?: any): string {
    if (product) {
      const { solde_price, regular_price } = product;
      const rate = ((regular_price - solde_price) * 100 / regular_price).toFixed(0);
      return rate+"%";
    }
    return ""

  }

}
