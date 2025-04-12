import { createReducer, on } from "@ngrx/store";
import { product } from "../models/product.model";
import { getAllCategories, getAllCategoriesFailure, getAllCategoriesSuccess, getAllProductFailure, getAllProducts, getAllProductSuccess } from "../actions/product.actions";
import { Category } from "../models/category.model";

export interface ProductState {
  products: ReadonlyArray<product>;
}

export interface CategoryState {
  categories: ReadonlyArray<Category>;
}

export const initialProductState: ReadonlyArray<product> = []
export const initialCategoryState: ReadonlyArray<Category> = []
export const productReducer = createReducer(
  initialProductState,
  on(getAllProducts, (state) => ({ ...state })),
  on(getAllProductSuccess, (state, { products }) => ({ ...state, products })),
  on(getAllProductFailure, (state, { error }) => ({ ...state, error }))
)

export const categoryReducer = createReducer(
  initialCategoryState,
  on(getAllCategories, (state) => ({ ...state })),
  on(getAllCategoriesSuccess, (state, { categories }) => [...categories]),
  on(getAllCategoriesFailure, (state, { error }) => ({ ...state, error }))
)
