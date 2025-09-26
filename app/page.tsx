import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import Barbershopitem from "./_components/barbershop-item";

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
          <Button className="gap-2" variant="secondary">
           <Image alt="Icone cabelo" src="/cabelo.svg" width={16} height={16}/>
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
           <Image alt="Icone barba" src="/barba.svg" width={16} height={16}/>
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
           <Image alt="Icone acabamento" src="/acabamento.svg" width={16} height={16}/>
            Acabamento
          </Button>
        </div>

        {/* BANNER */}
        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image alt="Agende com os melhores Barbers" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        {/* AGENDAMENTO */}
        <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

             <div className="flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage alt="Foto de Perfil" src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">Barbearia Full-Stack</p>
             </div>

            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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
      
      <footer>
        <Card className="py-6 px-5">
          <CardContent className="text-sm text-gray font-bold">
              © {new Date().getFullYear()} Barbearia Estilo — Todos os direitos reservados.
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}

export default Home;
