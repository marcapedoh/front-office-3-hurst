import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(companyId: string) {
    return this.httpClient.get<any>(environment.apiUrl + "products/company/" + companyId);
  }
}
