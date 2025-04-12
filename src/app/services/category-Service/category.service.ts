import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/components/auth/store/models/category.model';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private httpClient: HttpClient) { }

  getAllCategories(companyId: string): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + "categories/company/" + companyId).pipe(
      map(response => {
        return response.data.map((category: Category) => ({
          ...category,
          id: category.categoryId
        }));
      })
    );;
  }
}
