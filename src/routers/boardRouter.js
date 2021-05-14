import express from "express";
import { detailController, editController, listController, writeController } from "../controllers/boardController";

import {dbConnectionHandler} from "../middleware/middleware";
const boardRouter = express.Router();


boardRouter.get("/list", dbConnectionHandler, listController);
boardRouter.get("/write", writeController);
boardRouter.get("/edit", editController);
boardRouter.get("/detail", dbConnectionHandler, detailController);

export default boardRouter;