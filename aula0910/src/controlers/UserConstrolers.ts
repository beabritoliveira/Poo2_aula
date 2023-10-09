import { PrismaClient } from '@prisma/client';
import {Request, Response} from 'express'
const prisma = new PrismaClient();
class UserControler {
    constructor(){

    }
    async listarUsuarios(req : Request, res : Response){
        const users = await prisma.user.findMany();
        res.json({
            
        })
    }
    async CriarUsuarios(){

    }
    async AtualizarUsuarios(){

    }
    async DeletarUsuario(){

    }
}

export default new UserControler();