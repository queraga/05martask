import db from "./models/index.js";
const { sequelize, Category, Product } = db;

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await sequelize.sync({ force: true });
    console.log("All tables recreated successfuly.");
    const category = await Category.create({
      name: "Electronics",
    });
    console.log("Category created:", category.toJSON());

    const product1 = await Product.create({
      name: "iPhone",
      price: 999.99,
      categoryId: category.id,
    });

    const product2 = await Product.create({
      name: "MacBook",
      price: 1999.99,
      categoryId: category.id,
    });

    const product3 = await Product.create({
      name: "iPad",
      price: 799.99,
      categoryId: category.id,
    });

    const product4 = await Product.create({
      name: "Apple Watch",
      price: 399.99,
      categoryId: category.id,
    });

    console.log("Products created");
    console.log(product1.toJSON());
    console.log(product2.toJSON());
    console.log(product3.toJSON());
    console.log(product4.toJSON());

    const result = await Category.findOne({
      where: { id: category.id },
      include: Product,
    });
    console.log(JSON.stringify(result.toJSON(), null, 2));
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  } finally {
    await sequelize.close();
    console.log("Database connection closed");
  }
}
run();
