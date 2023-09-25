import db from "../database/models";
import { InventoryItemModel, noIdInventoryModel } from "../../types";

//!Ruta all Inventory
export const inventoryGet = async(): Promise<Array<InventoryItemModel>> => {
	return await db.InventoryItem.findAll();
}

//!Ruta id Inventory
export const inventoryIdGet = async({ id }: any): Promise<InventoryItemModel> =>{
	return await db.InventoryItem.findOne({
		where: { id }
	})
}

//!Ruta post Inventory
export const inventoryPost = async({purchase_price, selling_price, quantity, expiry_date, ProductId, SupplierId}: noIdInventoryModel): Promise<InventoryItemModel> => {
	const createInventory = await db.InventoryItem.create({purchase_price, selling_price, quantity, expiry_date, ProductId, SupplierId})
	return createInventory
}

//!Ruta update Inventory
export const inventoryPut = async(id: string, purchase_price: number, selling_price: number, quantity: number, expiry_date: Date): Promise<InventoryItemModel> => {
	const findInventory = await db.inventory.findOne({
		where: { id }
	})

	if(purchase_price) findInventory.purchase_price = purchase_price
	if(selling_price) findInventory.selling_price = selling_price
	if(quantity) findInventory.quantity = quantity
	if(expiry_date) findInventory.expiry_date = expiry_date

	const updateInventory = await findInventory.save()
	return updateInventory
}

//!Ruta Delete Invetory
export const inventoryDelete = async(data: any):Promise<number> => {
	return await db.InventoryItem.destroy({
		where: {
			id: data.id
		}
	});
}