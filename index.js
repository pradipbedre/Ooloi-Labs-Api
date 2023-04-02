import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventRouter from "./src/routes/EventRoutes.js";
const port = process.env.PORT || 2000;
const app = express();

/* Middle wares  */
dotenv.config();
app.use(express.json());

/* MongoDB Connection */
mongoose.set("strictQuery", true);
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  return res.send(`Ooloi-Labs-Api Backend Is Live :)`);
});

/* API Routes  */
/* app.use("/", userRouter); */

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
