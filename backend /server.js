import express from "express";

const app = express();
const port = 5001;

app.listen(5001, () => {
  console.log(`Server is running on port ${port}`);
});
