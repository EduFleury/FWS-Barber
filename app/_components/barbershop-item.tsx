import { BarberShopService } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface  BarbershopItemProps{
    barbershop: BarberShopService
}

const Barbershopitem = ({barbershop}:BarbershopItemProps) => {
    return (
       <Card className="min-w-[167px] rounded-2xl">
        <CardContent className="p-0 px-2 pt-1 pb-2">
            {/* IMAGEM */}
            <div className=" relative h-[159px] w-full">
                <Image className="object-cover rounded-2xl" src={barbershop.imageUrl} alt={barbershop.name} fill/>

                <Badge className="absolute top-2 left-2 z-50" variant="secondary">
                    <StarIcon size={12} className=" fill-primary text-primary"/>
                    <p className="text-xs font-semibold">5</p>
                </Badge>

            </div>

            {/* TEXTO */}
            <div className="py-3 px-1">
                <h3 className="font-semibold truncate">{barbershop.name}</h3>
                <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                <Button variant="secondary" className="w-full mt-3">Reservar</Button>
            </div>
        </CardContent>
       </Card>
    );

}

export default Barbershopitem;