import express from "express";
import { homeCotroller } from "../controllers/globalController";


const globalRouter = express.Router();

globalRouter.get("/",homeCotroller);

export default globalRouter;
