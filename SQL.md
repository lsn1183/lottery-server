# 单列排序：顺序
SELECT * FROM products ORDER BY product_name ASC
# 多列排序：以下 SQL 语句将选择员工表 employees 中的所有员工，并先按部门 ID 升序 ASC 排序，然后在相同部门中按雇佣日期降序 DESC 排序
SELECT * FROM employees ORDER BY department_id ASC, hire_date DESC
# 使用数字表示列的位置：以下 SQL 语句将选择员工表 employees 中的名字和工资列，并按第三列（salary）降序 DESC 排序，然后按第一列（first_name）升序
SELECT first_name, last_name, salary
FROM employees
ORDER BY 3 DESC, 1 ASC
# 使用表达式排序：以下 SQL 语句将选择产品表 products 中的产品名称和根据折扣率计算的折扣后价格，并按折扣后价格降序 DESC 排序。
SELECT product_name, price * discount_rate AS discounted_price
FROM products
ORDER BY discounted_price DESC
# 使用 NULLS FIRST 或 NULLS LAST 处理 NULL 值： 以下 SQL 语句将选择产品表 products 中的产品名称和价格，并按价格降序 DESC 排序，将 NULL 值排在最后。
SELECT product_name, price
FROM products
ORDER BY price DESC NULLS LAST