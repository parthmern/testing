import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

// mocked
// export const prismaClientMocked = {
//     sum : {
//         create : ()=>{

//         }
//     }
// }