# Sequelize One-to-Many Example

### Description

This project demonstrates how to set up a Node.js backend with Sequelize ORM and configure a One-to-Many relationship between two models: Category and Product.

A category can contain multiple products.

### Tech Stack

- Node.js
- Express
- Sequelize
- MySQL
- sequelize-cli

### Project Structure

```
config/
   db.js
   config.json

models/
   Category.js
   Product.js
   index.js

migrations/

seeders/
```

### Database Relationship

One-to-Many relationship:

```
Category (1) → Products (many)
```

Foreign key:

```
Products.categoryId → Categories.id
```

### Run migrations

```
npx sequelize-cli db:migrate
```

This will create tables:

```
Categories
Products
SequelizeMeta
```

### Result

The database now contains two related tables:

- Categories
- Products

Each product belongs to a category via categoryId.

# One-to-Many Association Test (Sequelize)

### Description

This script demonstrates and verifies a One-to-Many relationship between the Category and Product models using Sequelize with a MySQL database.

One category can contain multiple products.

What the Script Does

- Connects to the database using Sequelize.
- Synchronizes models with the database (sequelize.sync({ force: true })).
- Creates a new category.
- Creates several products associated with that category.
- Retrieves the category together with its related products using include.
- Prints the result to the console. - Closes the database connection.

### Relationship Structure

```
Category (1) -------- (Many) Product
```

- Category.hasMany(Product)
- Product.belongsTo(Category)
- foreign key: categoryId

### Verifying in MySQL Workbench

You can verify that the data was inserted correctly by running:

```
SELECT * FROM Categories;
SELECT * FROM Products;
```

The Products table contains the foreign key categoryId that references Categories.id.
