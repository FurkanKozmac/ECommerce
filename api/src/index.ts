import express, { json, urlencoded } from "express";
import productRoutes from "./routes/products/index";
import authRoutes from "./routes/auth/index";

const app = express();
const port = 4000;

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// products endpoints

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log("Server is running on http://localhost:4000");
});
