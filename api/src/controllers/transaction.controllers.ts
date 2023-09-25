import db from "../database/models";

export const transactionGet = async() => {
	return await db.Transaction.findAll();
}

export const transactionPost = async(data: any) => {
	return await db.Transaction.create(data);
}

export const transactionPut = async(data: any) => {
	return await db.Transaction.update(data, {
		where: {
			id: data.id
		}
	});
}

export const transactionDelete = async(data: any) => {
	return await db.Transaction.destroy({
		where: {
			id: data.id
		}
	});
}
