import db from "../database/models";
import { ProductItem, noIdProductItem } from "../../types";

export const productGet = async(): Promise<Array<ProductItem>> => {
	return await db.Product.findAll();
}

export const productIdGet =async ({ id }: any): Promise<ProductItem> => {
	return await db.Product.findOne({
		where: { id }
	})
}

export const productPost = async({name, description, price, stock_quantity, minimum_stock, CategoryId }: noIdProductItem):Promise<ProductItem> => {
	const checkProduct = await db.Product.findOne({
		where: { 
			name : name
		}
	})
	if(checkProduct) throw new Error('ALREADY_PRODUCT')

	const createProduct = await db.Product.create({name, description, price, stock_quantity, minimum_stock, CategoryId })
	return createProduct
}

export const productPut = async(id:string, name:string, description:string, price:number, stock_quantity: number, minimum_stock: number, CategoryId: string): Promise<ProductItem> => {
	const checkProductDB = await db.Product.findOne({
		where: { name }
	})

	if(checkProductDB) throw new Error('ALREADY_PRODUCT')

	const findProduct = await db.Product.findOne({
		where: { id }
	})

	if(name) findProduct.name = name
	if(description) findProduct.description = description
	if(price) findProduct.price = price
	if(stock_quantity) findProduct.stock_quantity = stock_quantity
	if(minimum_stock) findProduct.minimum_stock = minimum_stock
	if(CategoryId) findProduct.CategoryId = CategoryId

	const updateProduct = await findProduct.save()

	return updateProduct
}

export const productDelete = async(id: string): Promise<number> => {
	return await db.Product.destroy({
		where: {
			id: id
		}
	});
}