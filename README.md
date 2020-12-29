# shopee-clone

> eCommerce platform built with the MERN stack & Redux.

![shopee clone](https://user-images.githubusercontent.com/69780199/103274856-4813bb80-49f5-11eb-8766-da714180b8fe.png)

## Features

- Full featured shopping cart
- Checkout process (shipping, payment method, etc)
- Database seeder (products & users)

## Note on Issues
Please do not post issues here that are related to your own code when taking the course. Add those in the Udemy Q/A. If you clone THIS repo and there are issues, then you can submit

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGODB_CONNECT = your mongodb uri
PRIVATE_KEY = 'ian123'

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create client prod build
cd client
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:insert

# Destroy data
npm run data:remove
```