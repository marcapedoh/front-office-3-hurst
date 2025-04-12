import { createAction } from "@ngrx/store";
import { product } from "../models/product.model";
import { Category } from "../models/category.model";


export const getAllProducts = createAction("[Product] Get all products", (companyId: string) => ({ companyId }));
export const getAllProductSuccess = createAction("[Product] Get all products success", (products: ReadonlyArray<product>) => ({ products }))
export const getAllProductFailure = createAction("[Product] Get all Products failure", (error: string) => ({ error }))
export const getAllCategories = createAction("[Category] Get all categories", (companyId: string) => ({ companyId }));
export const getAllCategoriesSuccess = createAction("[Category] Get all categories success", (categories: ReadonlyArray<Category>) => ({ categories }))
export const getAllCategoriesFailure = createAction("[Category] Get all Categories failure", (error: string) => ({ error }))
