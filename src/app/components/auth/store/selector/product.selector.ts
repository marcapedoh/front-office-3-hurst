import { createSelector } from "@ngrx/store";
import { ProductState } from "../reducers/product.reducers";
import { product } from "../models/product.model";


export const selectAllProduct = createSelector(
  (state: ProductState) => state.products,
  (products: ReadonlyArray<product>) => products
)
