import { PrismaClient } from '@prisma/client';
import {Router} from 'express';
import UserConstrolers from '../controlers/UserConstrolers';
const prisma = new PrismaClient()

const UserRoute = Router();
UserRoute.get('/users', UserConstrolers.listarUsuarios)
// Para fazer essas manipulações é necessário usar a extensão Thunderbolt
UserRoute.post('/users', UserConstrolers.CriarUsuarios)
UserRoute.patch('/users', UserConstrolers.AtualizarUsuarios)
UserRoute.delete('/users', UserConstrolers.DeletarUsuario)

export default UserRoute;