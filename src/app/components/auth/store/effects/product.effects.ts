import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product-Service/product.service";
import { getAllCategories, getAllCategoriesFailure, getAllCategoriesSuccess, getAllProductFailure, getAllProducts, getAllProductSuccess } from "../actions/product.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { CategoryService } from "src/app/services/category-Service/category.service";



@Injectable()
export class ProductEffects {

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCategories),
      exhaustMap(({ companyId }) =>
        this.categoryService.getAllCategories(companyId).pipe(
          map((response) => getAllCategoriesSuccess(response)),
          catchError((error) => of(getAllCategoriesFailure(error)))
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllProducts),
      exhaustMap(({ companyId }) =>
        this.productService.getAllProducts(companyId).pipe(
          map((response) => getAllProductSuccess(response)),
          catchError((error) => of(getAllProductFailure(error)))
        ))
    ))

  constructor(private actions$: Actions, private router: Router, private productService: ProductService, private categoryService: CategoryService) { }
}
