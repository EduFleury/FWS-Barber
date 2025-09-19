import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return ( 
    <div>
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Eduardo!</h2>
        <p>Segunda-feria, 05 de agosto.</p>
        
        <div className="flex items-center gap-2 mt-24">
          <Input placeholder="Search"/>
          <Button>
            <SearchIcon/>
          </Button>
        </div>

        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image alt="Agende com os melhores Barbers" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

      </div>
    </div>
  );
}
