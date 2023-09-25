'use strict';
import { Model } from 'sequelize';
import { InventoryItemModel } from "../../../types"
module.exports = (sequelize: any, DataTypes: any) => {
  class InventoryItem extends Model<InventoryItemModel> implements InventoryItemModel {
    id!: string;
    purchase_price!: number;
    selling_price!: number;
    quantity!: number;
    expiry_date!: Date;
    static associate(models: any) {
      InventoryItem.belongsTo(models.Product)
      InventoryItem.belongsTo(models.Supplier)
      InventoryItem.hasMany(models.Transaction)
    }
  }
  InventoryItem.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    purchase_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selling_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'InventoryItem',
  });
  return InventoryItem;
};