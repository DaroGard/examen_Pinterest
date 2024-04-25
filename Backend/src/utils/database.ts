import mongoose from "mongoose";

export class Database{
    server :string = 'localhost';
    port:string = '27017';
    db:string = 'pinterest';

    constructor(){
        mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
        .then(()=>{
            console.log('Conectado a Mongo');
        }).catch((error)=>{
            console.error(error);
        })
    }
}