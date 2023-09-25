'use strict';
import { Model } from 'sequelize';
import { TransactionItem } from '../../../types';
module.exports = (sequelize: any, DataTypes: any) => {
  class Transaction extends Model<TransactionItem> implements TransactionItem {
    id!: string;
    transaction_type!: string;
    quantity!: number;
    transaction_date!: Date;
    static associate(models: any) {
      Transaction.belongsTo(models.InventoryItem)
    }
  }
  Transaction.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true
  } 
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};