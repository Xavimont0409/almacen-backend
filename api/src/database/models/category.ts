"use strict";
import { Model } from "sequelize";
import { CategoryItem } from "../../../types"
module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryItem> implements CategoryItem {
    id!: string;
    name!: string;
    static associate(models: any) {
      Category.hasMany(models.Product)
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
