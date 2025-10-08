import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapIcon, MenuIcon, StarIcon } from "lucide-react";
import {Sheet, SheetTrigger} from "../../_components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SidebarSheets from "@/app/_components/sidebar-sheets";

interface BarbershopPageProps{
    params: Promise<{ id: string }>;
}

const BarberShopPage = async ({params}:BarbershopPageProps) => {
  const { id } = await params;
  const barbershop = await db.baberShop.findUnique({
    where:{
        id: id
    },
    include:{
        services: true
    }
  })

  if(!barbershop){
    return notFound()
  }

  return (
    <div>
        {/* IMAGEM */}
        <div className="relative w-full h-[250px]">

          <Image
            fill
            className="object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

        <Button size="icon" variant="secondary" className=" absolute top-4 left-4" asChild>
            <Link href="/">
                <ChevronLeftIcon/>
            </Link>
        </Button>

        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className=" absolute right-4 top-4">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>
            <SidebarSheets/>
        </Sheet>
        
        </div>

        <div className="p-5 border-b border-solid">
            <h1 className="font-bold text-xl mb-3">{barbershop?.name}</h1>
            <div className="flex items-center mb-2">
                <MapIcon className="text-primary" size={18}/>
                <p className="text-sm">{barbershop?.address}</p>
            </div>

            <div className="flex items-center">
                <StarIcon className="text-primary fill-primary" size={18}/>
                <p className="text-sm">5,0 (340 avaliações)</p>
            </div>
        </div>

        {/* DESCRICAO */}
        <div className="p-5 border-b border-solid space-y-3">
            <h2 className="font-bold uppercase text-gray-400">Sobre nós</h2>
            <p className="text-sm text-justify">{barbershop?.description}</p>
        </div>

        {/* SERVICOS */}
        <div className="p-5 space-y-3 border-b border-solid">
            <h2 className="font-bold uppercase text-gray-400 text-sx mb-3">Serviços</h2>
            <div className=" space-y-3">
                {barbershop.services.map(service => <ServiceItem service={JSON.parse(JSON.stringify(service))} barbershop={JSON.parse(JSON.stringify(barbershop))} key={service.id}/>)}
            </div>
        </div>

        <div className="p-5 space-y-3">
            {barbershop.phones.map((phone, index) => (
                <PhoneItem phone={phone} key={index}/>
            ))}
        </div>

    </div>
  );
}

export default BarberShopPage;