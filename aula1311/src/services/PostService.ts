import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostService{
    constructor(){}

    async createPost(post: Prisma.PostCreateInput){
        try{
            const newPost = await prisma.post.create({
                data: post
            });
            return newPost;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async findPost(id?: string){
        try{
            
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async updatePost(){

    }

    async deletePost(){

    }
}