# 🧠 Inventory Management API
A RESTful API for managing products, inventory transactions, and stock reports.
Built with native Node.js (no framework) and MySQL, using a clean modular folder structure.

# 🚀 Features
* Product Management (POST, GET, PUT)

* Stock In/Out Transactions

* Inventory Value Report

* Low Stock Report

# 📦 Struktur Folder
<pre>
backend/
├── bootstrap/           # Database connection
├── controller/          # HTTP request handlers
├── repositories/        # Data access layer
├── routes/              # Route definitions
├── services/            # Business logic layer
├── .env                 # Environment variables
└── server.js             # Entry point
</pre>


# ⚙️ Getting Started

## 1. Clone the repository
```
git clone https://github.com/bimapw4/inventories-BE.git
cd inventories-BE
```

## 2. Install dependencies
```
npm install
```

## 3. Configure your environment
```
PORT = 3001

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=inventory
DB_PORT=3306
```

## 4. Run the server
```
node index.js
```


# 📮 API Endpoints
You can see the collection postiman in [Collection Postman](https://drive.google.com/file/d/18gpbAzarQBTutlB6-APjBaMJvOc8x73o/view?usp=drive_link)

You can just import the collection on the postman

# 📚 Tech Stack
* Node.js (native http module)

* MySQL (mysql2/promise)

* Modular architecture

* dotenv for environment config
