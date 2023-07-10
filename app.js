import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { user } from "./controller/user.js";
console.clear();
let json = {
    id : "14",
    nombre : "fred",
    edad : 17
};

let data = plainToClass(user, json, {excludeExtraneousValues: true});
console.log(data);
console.log(JSON.stringify(data));