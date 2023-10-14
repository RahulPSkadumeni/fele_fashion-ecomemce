import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
//rote import

// import categoryRoutes from "./routes/categoryRoutes.js";

/*MIDDLEware configuration*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3001"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const PORT = process.env.PORT || 3000;

/* middlewares */

app.get("/login", (req, res) => {
  console.log("hello");
  try {
    res.status(200).send("user login success");
  } catch (error) {
    console.log("user login failed", error);
  }
});

import categoryRoutes from "./routes/categoryRoutes.js";
import productRouters from "./routes/productRoutes.js";
app.use("/api/product", categoryRoutes);
app.use("/api/product/", productRouters);
mongoose
  .connect(
    // "mongodb+srv://rahulps995:FXUzQB45WFNpFOTG@cluster0.axpd3e6.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://rahulps995:YxXn00k2ytnICiRA@cluster0.9gmrpk1.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Server Port:${PORT}`));
  })
  .catch((error) => console.log(`${error}did not connect`));
