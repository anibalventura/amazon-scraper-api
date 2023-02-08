# Amazon Scraper API

[![npm](https://img.shields.io/static/v1?label=npm&message=8.5.5&color=purple)](https://www.npmjs.com/)
[![NodeJS](https://img.shields.io/static/v1?label=NodeJS&message=16.15.0&color=green)](https://nodejs.org/en/)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)](LICENSE.md)

Scraper API to get information of an Amazon product, built with NodeJS and Express.

## Overview

| Routes                             | Description                 | Request body | Response body           |
| ---------------------------------- | --------------------------- | ------------ | ----------------------- |
| `GET /product-search/:searchQuery` | Get list of products        | None         | List of products        |
| `GET /product/:productId`          | Get product by ID           | None         | Product                 |
| `GET /product-reviews/:productId`  | Get list of product reviews | None         | List of product reviews |
| `GET /product-offers/:productId`   | Get list of product offers  | None         | List of product offers  |

## Usage

Before you can start using the API you need a key from [ScraperAPI](https://www.scraperapi.com/).

`http://localhost:5000/product/PRODUCT_ID?api_key=YOUR_KEY`

## Build

1. Need to have [NodeJS](https://www.npmjs.com/) and [NPM](https://nodejs.org/en/) installed on your machine.
2. Open the project on [Visual Studio Code](https://code.visualstudio.com/) or terminal.
3. Install dependencies running `npm install`
4. Run the project with `npm run dev`

## License

```xml
MIT License

Copyright (c) 2022 Anibal Ventura
```
