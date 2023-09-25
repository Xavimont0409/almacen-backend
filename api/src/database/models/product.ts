import { Model } from 'sequelize';
import { ProductItem } from '../../../types';
module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductItem> implements ProductItem {
    id!: string;
    name!: string;
    description!: string;
    price!: number;
    stock_quantity!: number;
    minimum_stock!: number;
    static associate(models: any) {
      Product.belongsTo(models.Category)
      Product.hasMany(models.InventoryItem)
    }
  }
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimum_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};