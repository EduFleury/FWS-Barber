import { Button } from "@/app/_components/ui/button";
import Header from "./_components/header";
import Image from "next/image";
import { db } from "./_lib/prisma";
import Barbershopitem from "./_components/barbershop-item";
import { quickSearchOptions, QuisearchOption } from "./_constants/serach";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";
import { authOptions } from "./_lib/auth";
import { getServerSession } from "next-auth";
import TextHome from "./_components/home";



const Home = async () =>{

  const session = await getServerSession(authOptions)

  const confirmedBookings = session?.user ? await db.booking.findMany({
        where:{
            userId: (session?.user as any).id,
            date:{
                gte: new Date(),
            }
        },
        include: {
            service:{
                include:{
                    barberShop: true
                }
            }
        },
        orderBy:{
          date: 'asc'
        }
    }) : []

  const barbershops = await db.baberShop.findMany();
  const popularesBarberShops = await db.baberShop.findMany({
    orderBy:{
      name: 'desc'
    }
  });

  return ( 
    <div>
      <Header/>
      <div className="p-5">
        {/* TEXTO */}
        <TextHome/>
        
        {/* BUSCA */}
        <div className="mt-6">
            <Search/>
        </div>

        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option: QuisearchOption) =>
            (
              <Link key={option.title} href={`/barbershops?service=${option.title}`}>
              <Button  className="gap-2" variant="secondary">
               <Image alt="Icone cabelo" src={option.imageUrl} width={16} height={16}/>
                {option.title}
              </Button>
              </Link>
            )
          )}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image alt="Agende com os melhores Barbers" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        {/* AGENDAMENTO */}
        {confirmedBookings.length > 0 && (

          <>
            <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
              Agendamentos
            </h2>

            <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
               {confirmedBookings.map((bookings) =>(
                 <BookingItem key={bookings.id} booking={bookings}/>
               ))}
            </div>
          </>

        )}

        {/* RECOMENDADOS */}
        <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(barbershop => <Barbershopitem key={barbershop.id} barbershop={barbershop}/>)}
        </div>

        {/* POPULARES */}
        <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularesBarberShops.map(barbershop => <Barbershopitem key={barbershop.id} barbershop={barbershop}/>)}
        </div>

      </div>
    
    </div>
  );
}

export default Home;
