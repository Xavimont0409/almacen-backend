import { CategoryItem, noIdCategoryItem } from "../../types";
import db from "../database/models";

export const categoryGet = async () :Promise<Array<CategoryItem>> => {
  return await db.Category.findAll();
};

export const categoryIdGet =async ({ id }: any) : Promise<CategoryItem>=> {
  console.log(id);
  return await db.Category.findOne({
    where: { id }
  })
}
export const categoryPost = async ({ name }: noIdCategoryItem) : Promise<CategoryItem> => {
  const checkCategory = await db.Category.findOne({
    where: { name },
  });
  if (checkCategory) throw new Error("ALREADY_CATEGORY");

  const createCategory = await db.Category.create({ name });

  return createCategory;
};

export const categoryPut = async (id: string , name: string): Promise<CategoryItem> => {
	const checkCategory = await db.Category.findOne({
		where: { name }
	})
	if(checkCategory) throw new Error("ALREADY_THIS_CATEGORY")

  const findCategory = await db.Category.findOne({
    where: {id}
  })
  if(name) findCategory.name = name
  const updateCategory = await findCategory.save()
  return updateCategory
};

export const categoryDelete = async ( id : string): Promise<number> => {
  return await db.Category.destroy({
    where: {
      id: id,
    },
  });
};
