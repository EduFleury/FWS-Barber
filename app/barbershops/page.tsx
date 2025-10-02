import { Search } from "lucide-react"
import Barbershopitem from "../_components/barbershop-item"
import Header from "../_components/header"
import { db } from "../_lib/prisma"

interface BarberShopPageProps{

    searchParams:{
        search?:string
    }

}

const BarberShopPage = async ({searchParams}: BarberShopPageProps) =>{
    const barbershop = await db.baberShop.findMany({
        where:{
            name:{
                contains: searchParams?.search,
                mode: "insensitive"
            }
        }
    })
    return(
        <div >
            <Header/>
            <div className="my-6 px-5">
                <Search/>
            </div>
            <div className="px-5">
                <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">Resultados para &quot;{searchParams.search}&quot;</h2>
                <div className="grid grid-cols-2 gap-4">
                    {barbershop.map(barbershop =>(
                        <Barbershopitem key={barbershop.id} barbershop={barbershop}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BarberShopPage;