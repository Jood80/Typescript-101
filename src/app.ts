import express, { Application, Request, Response, NextFunction } from "express";

const app: express.Application = express();

const add = (num1: number, num2: number): number => num1 + num2;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(2, 4));
  res.send("helloooo");
});

app.listen(5000, () => console.log("server is running on port 5000"));
