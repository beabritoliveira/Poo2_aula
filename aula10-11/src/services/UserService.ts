//CRUD DO USUÁRIO

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
    constructor(){}

    async listUser(id?: string){
        try{
            if(id){ //Se o id foi inserido se imprimi so ele
                const user = prisma.user.findUnique({
                    where: {
                        id: id
                    }
                })
                return user;
            } else { //Imprimi todos os usuarios se não tem id
                const users = await prisma.user.findMany();
                return users;
            }
        } catch(error){
            console.log(error);
            return null;
        }
    }
    async createUser(user: Prisma.UserCreateInput){
        try{
            const newUser = await prisma.user.create({
                data: user
            });
            return newUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async upadateUser(id: string, user: Prisma.UserCreateInput){
        try{
            const userUpdate = await prisma.user.update({
                where: {
                    id
                },
                data: user
            });
            return userUpdate;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async deleteUser(id: string){
        try{
            if(!id){
                return console.log("Não possui um elemento com esse id para ser deletado");
            }
            const detedUser = await prisma.user.delete({
                where:{id}
            })
            return console.log("Okay");
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();