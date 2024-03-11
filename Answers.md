ANSWER 1:
The relationship between the "product" and "product_category" entities is one-to-many. A single product can belong to one category (one-to-one).
A single category can have many products associated with it (many-to-one).
This relationship can be explained as:
(i)The "product" table has a foreign key column that references the primary key of the "product_category" table.
(ii) By storing the category ID in the product table, each product record indicates which category it belongs to.
(iii) This relationship is characterized by the fact that one record in the "product_category" table can be associated with multiple records in the "product" table. However, each record in the "product" table can only be associated with one record in the "product_category" table i.e. each product belongs to only one category.
For Example: a product chair belongs to the product_category Furniture. But in the Furniture category, there could be multiple products.

ANSWER 2:
To ensure that each product in the "product" table has a valid category assigned to it, I could implement a few strategieS:

1. Foreign Key Constraint: Define a foreign key constraint on the category_id column in the product table, referencing the id column in the product_category table. Thus, any attempt to insert a product with an invalid category_id will be rejected.

2. Validation on Insert/Update: When adding or updating products in your application, implement validation logic to check if the provided category ID exists in the product_category table before saving the product data. This provides real-time feedback to users and prevents invalid data from entering the system. This can be done by adding CASCADE to the query.

3.Required Category: While mentioning value for each attribute, you can make sure that every product is assigned value for each attribute by adding required field or NOT NULL(in case of SQL).

4. Default Category: Optionally, you can set a default category (with a specific id) for new products if no category is explicitly assigned during product creation. This ensures that every new product will have a valid category assigned.
