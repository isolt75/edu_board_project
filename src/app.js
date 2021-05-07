import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter"
import boardRouter from "./routers/boardRouter"


const PORT = 7000;
const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname,"/assets")));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/", globalRouter);
app.use("/board", boardRouter)

app.listen(PORT, ()=>{
console.log(`LOL_BOARD WEB PROJECT - http://localhost:${PORT}`)
});

