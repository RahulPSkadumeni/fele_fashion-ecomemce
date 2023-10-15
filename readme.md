# Fele Fashions

This project involves creating a backend service for a product listing application for "Fele Fashions," which includes REST API endpoints for listing product categories, listing product, products of a given category, and adding new products

## Tech Stack

**Client:**

**Server:** Node v16.20.0, Express, MongoDB, Google Compute Engine (GCE)

## API Reference

### Add categories

http://34.93.80.76/api/product/categories

http://localhost:3000/api/product/categories

#### Method : POST

#### Request Headers

x-api-key : abcd-efgh-ijlk-1234

#### Body

```
 {

     "categoryId": 4,

     "categoryName": "Jeans"

   }

```

### Add Product

http://34.93.80.76/api/product/save

http://localhost:3000/api/product/save

#### Method : POST

#### Request Headers

x-api-key : abcd-efgh-ijlk-1234

#### Body

```
{


     "categoryId": 4,

     "productName": "Wrangler Jeans Blue",

     "price": 2799,

     "productImage": "https://m.media-amazon.com/images/I/71PlL4dfepL._UX679_.jpg",

     "brand":"Wrangler"

   }

```

### Get all Category

http://34.93.80.76/api/product/categories

http://localhost:3000/api/product/categories

#### Method : GET

#### Request Headers

x-api-key : abcd-efgh-ijlk-1234

#### Body

```
{

}

```

### Get Product By Catregory

http://34.93.80.76/api/product/list?categoryId=1

http://localhost:3000/api/product/list?categoryId=1

#### Method : GET

#### Request Headers

x-api-key : abcd-efgh-ijlk-1234

#### Query Params

```
categoryId = 1

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/RahulPSkadumeni/fele_fashion-ecomemce.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

or

```
nodemon
```

## Features

- Implemented REST API endpoints as per the provided details.
- Set up a Google Compute Engine (GCE) instance and deployed the service.
- Secured the API with x-api-key for authentication.
- Stored data in mongoDB.
- Ensured real-time responses.
