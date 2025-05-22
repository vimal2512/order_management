# order_management

## Order Management API

This is a simple RESTful API built using Node.js, Express, and Sequelize (PostgreSQL) to manage customer orders. It includes basic CRUD operations and supports bulk creation of orders.

---

## Features

- Create a new order  
- Get all orders  
- Get order by ID  
- Update an order  
- Delete an order  
- Bulk create multiple orders  

---

## Tech Stack

- Node.js  
- Express  
- PostgreSQL  
- Sequelize (ORM)  
- dotenv  

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/vimal2512/order_management.git
cd order_management


### 2. Install dependencies
npm install

3. Configure environment variables
DB_PASSWORD=Java@123
PORT=3000

4. Run the server
npm run dev

## API Endpoints

### Create a new order

- **POST** `http://localhost:3000/api/orders`  
- **Body Example:**

```json
{
  "customerName": "Alice",
  "product": "Smartphone",
  "quantity": 1,
  "price": 699.99
}

Bulk create orders
POST http://localhost:3000/api/orders/bulk
[
  {
    "customerName": "Alice",
    "product": "Smartphone",
    "quantity": 1,
    "price": 699.99
  },
  {
    "customerName": "Bob",
    "product": "Laptop",
    "quantity": 2,
    "price": 1200.5
  }
]

Get all orders
GET http://localhost:3000/api/orders

Get order by ID
GET http://localhost:3000/api/orders/4

Update an order
PUT http://localhost:3000/api/orders/4
Body Example:

{
  "customerName": "Alice Updated",
  "product": "Smartphone",
  "quantity": 2,
  "price": 699.99
}

Delete an order
DELETE http://localhost:3000/api/orders/4





