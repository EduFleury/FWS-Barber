import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapIcon, MenuIcon, StarIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "../../_components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SidebarSheets from "@/app/_components/sidebar-sheets";
import { getBarberShopById } from "@/app/_date/get-BarberShop-ByID";

interface BarbershopPageProps {
  params: Promise<{ id: string }>;
}

const BarberShopPage = async ({ params }: BarbershopPageProps) => {
  const { id } = await params;
  const barbershop = await getBarberShopById(id);

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* 
        Container da Imagem:
        - No mobile, ele continua ocupando a largura total.
        - No desktop (lg:), ele se torna um container centralizado com largura máxima.
      */}
      <div className="relative h-[250px] w-full lg:h-[450px] lg:max-w-7xl lg:mx-auto lg:mt-8 lg:rounded-xl lg:overflow-hidden">

        <Image
          fill
          className="object-cover"
          src={barbershop.imageUrl}
          alt={barbershop.name}
        />

        <Button size="icon" variant="secondary" className="absolute top-4 left-4 lg:top-6 lg:left-6" asChild>
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="absolute right-4 top-4 lg:right-6 lg:top-6">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheets />
        </Sheet>
      </div>


      <div className="p-5 lg:max-w-7xl lg:mx-auto lg:mt-8">

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Coluna Principal (Esquerda no Desktop) */}
          <div className="lg:col-span-2">
            <div className="border-b border-solid pb-5">
              <h1 className="font-bold text-2xl lg:text-3xl mb-3">{barbershop?.name}</h1>
              <div className="flex items-center mb-2">
                <MapIcon className="text-primary" size={18} />
                <p className="text-sm ml-2">{barbershop?.address}</p>
              </div>
              <div className="flex items-center">
                <StarIcon className="text-primary fill-primary" size={18} />
                <p className="text-sm ml-2">5,0 (340 avaliações)</p>
              </div>
            </div>

            {/* SERVIÇOS */}
            <div className="py-5 space-y-3">
              <h2 className="font-bold uppercase text-gray-400 text-sm mb-3">Serviços</h2>

              <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
                {barbershop.services.map(service => (
                  <ServiceItem service={JSON.parse(JSON.stringify(service))} barbershop={JSON.parse(JSON.stringify(barbershop))} key={service.id} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-5 lg:border lg:border-solid lg:rounded-xl space-y-5">
              {/* SOBRE NÓS */}
              <div>
                <h2 className="font-bold uppercase text-gray-400 text-sm">Sobre nós</h2>
                <p className="text-sm text-justify mt-3">{barbershop?.description}</p>
              </div>

              <div className="border-t border-solid"></div>

              {/* TELEFONES */}
              <div className="space-y-3">
                {barbershop.phones.map((phone, index) => (
                  <PhoneItem phone={phone} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarberShopPage;
