import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());

app.use("/api/user/", router);
app.use("/api/blog/", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:vV9IOwpZ3apej2Vu@cluster0.pvh0g14.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Server is running on port 5000"))
  .catch((err) => console.log(err));

//vV9IOwpZ3apej2Vu
