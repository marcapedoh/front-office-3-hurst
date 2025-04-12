import { createSelector } from "@ngrx/store";
import { CategoryState } from "../reducers/product.reducers";
import { Category } from "../models/category.model";


export const selectCategories = createSelector(
  (state: CategoryState) => state.categories,
  (categories: ReadonlyArray<Category>) => categories
)
