import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
    constructor(){}

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

    async findUser(id: number | undefined){
        try{
            if(id){ // Se o id existir ele vai achar o usuário que tem esse id
                const user = prisma.user.findUnique({
                    where: {
                        id: id
                    }
                })
                return user;
            } else { // Se não houver id ele vai listar todos os usuários
                const user = await prisma.user.findMany();
                return user;
            }
        } catch(error){
            console.log(error);
            return null;
        }
    }


    async upadateUser(id: number, newData: Prisma.UserCreateInput){
        try{
            const userUpdate = await prisma.user.update({
                where: {
                    id: id
                },
                data: {
                    email: newData.email,
                    name: newData.name
                }
            });
            return userUpdate;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(id: number){
        try{
            if(!id){
                return console.log("Não possui um elemento com esse id para ser deletado");
            }
            await prisma.user.delete({where:{id}})
            return console.log("Okay");
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();
