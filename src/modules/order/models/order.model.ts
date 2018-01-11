import { IFilter } from "../../shared/models/filter.model";

export interface IOrder {
  id?: string;
  table: any;
  status: string;
  user?: any;
  products: IOrderProduct[];
  total_amount: number;
  created_at?: number;
  finish_at?: number;
  loading?: boolean;
  error?: any;
};

export interface IOrderList {
  orders: IOrder[];
  filter?: IFilter;
  loading?: boolean;
  error?: any;
}

export interface IOrderModule {
  orderList: IOrderList;
};

export interface IOrderProduct {
  item: any;
  quantity: number;
};
