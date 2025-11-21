import express from "express";
const { Request: ExpressRequest, Response: ExpressResponse } = express;
const app = express();

const port = 3001;
app.use(express.json());

app.get("/", (req: ExpressRequest, res: ExpressResponse) => {
  res.status(200).send("Server is live!!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

