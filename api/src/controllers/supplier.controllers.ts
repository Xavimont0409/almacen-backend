import db from "../database/models";

export const supplierGet = async() => {
	return await db.Supplier.findAll();
}

export const supplierPost = async(data: any) => {
	return await db.Supplier.create(data);
}

export const supplierPut = async(data: any) => {
	return await db.Supplier.update(data, {
		where: {
			id: data.id
		}
	});
}

export const supplierDelete = async(data: any) => {
	return await db.Supplier.destroy({
		where: {
			id: data.id
		}
	});
}