import express from "express";
import * as bodyParser from "body-parser";
import { ResourceController } from "./controllers/resource.controller";

const app = express();

const port = 3000;

app.use(bodyParser.json());


app.post("/resources", ResourceController.create);

app.listen(port);