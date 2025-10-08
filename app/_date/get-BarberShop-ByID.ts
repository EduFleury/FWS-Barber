"use server"

import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";

export const getBarberShopById = async (id:string) =>{
    const session = await getServerSession(authOptions)

    if(!session?.user){
        return null
    }

    return await db.baberShop.findUnique({
    where:{
        id: id
    },
    include:{
        services: true
    }
  })
}