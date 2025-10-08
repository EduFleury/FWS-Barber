"use server"

import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";

interface SearchParams {
  title?: string
  service?: string
}

export const getBarbershopsParam = async (searchParams?: SearchParams) => {

  const session = await getServerSession(authOptions)

  if(!session?.user){
      return []
  }

  return await db.baberShop.findMany({
        where:{
            OR:[
                searchParams?.title ? {
                    name:{
                        contains: searchParams?.title,
                        mode: "insensitive"
                    }
                }: {},
                searchParams?.service ? {
                    services:{
                        some:{
                            name:{
                                contains: searchParams?.service,
                                mode: "insensitive"
                            }
                        }
                    }
                }: {},
            ]
        }
    })

}
