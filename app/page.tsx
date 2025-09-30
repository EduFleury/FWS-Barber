import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import Barbershopitem from "./_components/barbershop-item";
import { quickSearchOptions, QuisearchOption } from "./_constants/serach";
import BookingItem from "./_components/booking-item";



const Home = async () =>{

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
        <h2 className="text-xl font-bold">Olá, Eduardo!</h2>
        <p>Segunda-feria, 05 de agosto.</p>
        
        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-24">
          <Input placeholder="Search"/>
          <Button>
            <SearchIcon/>
          </Button>
        </div>

        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option: QuisearchOption) =>
            (
              <Button key={option.title} className="gap-2" variant="secondary">
               <Image alt="Icone cabelo" src={option.imageUrl} width={16} height={16}/>
                {option.title}
              </Button>
            )
          )}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image alt="Agende com os melhores Barbers" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        {/* AGENDAMENTO */}
        <BookingItem/>

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
