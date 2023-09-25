import { Model } from 'sequelize';
import { SupplierItemModel } from '../../../types';
module.exports = (sequelize: any, DataTypes:any) => {
  class Supplier extends Model<SupplierItemModel> implements SupplierItemModel {
    id!: string;
    name!: string;
    contact_name!: string;
    email!: string;
    phone!: number;
    address!: string;

    static associate(models: any) {
      Supplier.hasMany(models.InventoryItem)
    }
  }
  Supplier.init({
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, 
  {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};