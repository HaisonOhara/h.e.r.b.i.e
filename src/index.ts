import { request } from "express";
import express from "express";

const app = express();

app.use(express.json());

app.post("/light", (request, response) => {


  return response.status(201).send();
});

app.listen(3333);
