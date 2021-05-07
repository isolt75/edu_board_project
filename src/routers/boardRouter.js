import express from "express";
import { detailController, editController, listController, writeController } from "../controllers/boardController";


const boardRouter = express.Router();


boardRouter.get("/list", listController);
boardRouter.get("/write", writeController);
boardRouter.get("/edit", editController);
boardRouter.get("/detail", detailController);

export default boardRouter;