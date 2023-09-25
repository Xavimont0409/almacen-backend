import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface ProductItem {
	id:string;
	name: string;
	description: string;
	price: number;
	stock_quantity: number;
	minimum_stock: number;
	CategoryId:string;
}
export type noIdProductItem = Omit<ProductItem, "id">

export interface CategoryItem{
	id: string;
	name: string;
}
export type noIdCategoryItem = Omit<CategoryItem, "id">

export interface SupplierItemModel{
	id: string;
	name: string;
	contact_name: string;
	email: string;
	phone: number;
	address: string;
}

export interface InventoryItemModel{
	id: string;
	purchase_price: number;
	selling_price: number;
	quantity: number;
	expiry_date: Date;
	ProductId:string;
	SupplierId:string;
}
export type noIdInventoryModel = Omit<InventoryItemModel, "id">

export interface TransactionItem{
	id: string;
	transaction_type: string;
	quantity: number;
	transaction_date: Date;
}

export interface UserModel{
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: number;
	password: string;
}
export type noIdUserModel = Omit<UserModel, "id">
export type LoginUser = Omit<UserModel, "id" | "firstName" | "lastName" | "phone">

export interface RequestExt extends Request{
	user?: string | JwtPayload
}