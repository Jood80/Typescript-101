"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const add = (num1, num2) => num1 + num2;
app.get("/", (req, res, next) => {
    console.log(add(2, 4));
    res.send("heloooo");
});
app.listen(5000, () => console.log("server is running on port 5000"));
