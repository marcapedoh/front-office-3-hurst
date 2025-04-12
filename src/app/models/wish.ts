import { product } from "../components/auth/store/models/product.model";

export class Wish {
  _id?: string;
  quantity?: number;
  total: number = 0;
  articles: Array<product> = [];
  created_at?: Date;
}
