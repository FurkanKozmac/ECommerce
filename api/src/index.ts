import express, { json, urlencoded } from "express";
import productRoutes from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";
import serverless from "serverless-http";

const port = 3000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// products endpoints

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

if (process.env.NODE_ENV === "dev") {
  app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

export const handler = serverless(app);
