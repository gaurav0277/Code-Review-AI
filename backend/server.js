import dotenv from "dotenv";
dotenv.config();




import app from "./src/app.js";

app.listen(1000, () => {
  console.log("server is running at port 1000");
});
