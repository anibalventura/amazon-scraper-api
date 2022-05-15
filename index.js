import express from "express";
import productsRoutes from "./routes/products.js";

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes.
app.get("/", (_, res) => res.send("Welcome to Amazon Scraper API!"));
app.use(productsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
