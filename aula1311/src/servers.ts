import express, {Request, Response}  from "express";

const app = express();

app.get('/', function(req: Request, res: Response){
    res.end("teste")
});

app.listen(3000, function(){
    console.log("Servidor para escutar requisições do protocolo HTTP");
})