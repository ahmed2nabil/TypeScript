import  express , { Application, Request, Response, NextFunction}from  'express';
import {Server, Path, GET, PathParam} from "typescript-rest";

const app: Application = express();
const port : number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.send("hello from Typescript")
})
app.listen(port, () => {
  console.log(`BlogApp application is running on port ${port}.`);
});