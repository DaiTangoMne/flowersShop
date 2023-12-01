import { DataTypes, Model } from "sequelize";

export default class Product extends Model {
    static initialize(sequelize) {
        Product.init(
            {
                name: { type: DataTypes.STRING, allowNull: false },
                description: { type: DataTypes.STRING, allowNull: true },
                price: {type: DataTypes.REAL, allowNull: false },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Product',
                tableName: 'products',
                paranoid: true,
            }
        );
    }
}

