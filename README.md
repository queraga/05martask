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
