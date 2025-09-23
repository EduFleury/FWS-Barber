import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

export default function Home() {
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

        {/* BANNER */}
        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image alt="Agende com os melhores Barbers" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        {/* AGENDAMENTO */}
        <Card className="mt-6">
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

      </div>
    </div>
  );
}
