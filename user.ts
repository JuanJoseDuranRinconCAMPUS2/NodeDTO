import { Expose, Type, Transform } from "class-transformer";
export class user{
    @Expose({name : "id"})
    @Transform(({ value }) => parseInt(value), {toClassOnly: true})
    ID: number;
    @Expose({name : "nombre"})
    @Type(() => String)
    nom_com : string;
    @Expose({name : "edad"})
    @Transform(({ value }) => parseInt(value), {toClassOnly: true})
    age : number;
    constructor(ID: number, nom_com : string, age : number){
        this.ID = ID;
        this.nom_com = nom_com;
        this.age = age;
    }
    nombreId(){
        return
    }
}