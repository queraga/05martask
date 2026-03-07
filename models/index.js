import sequelize from "../config/db.js";
import Category from "./Category.js";
import Product from "./Product.js";

Category.hasMany(Product, {
  foreignKey: "categoryId",
});

Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

export { sequelize, Category, Product };
export default { sequelize, Category, Product };
