INSERT INTO sales (quantity,price,date,product_id)
SELECT sales_csv.no_sold,sales_csv.sales_price,sales_csv.date, products.id
FROM sales_csv 
INNER JOIN products
ON products.name = sales_csv.stock_item;
