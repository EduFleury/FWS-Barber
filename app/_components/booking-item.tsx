import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Booking, Prisma } from "@prisma/client";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps{
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include:{
          barberShop: true
        }
      } 
    }
  }>
}

const BookingItem = ({booking}:BookingItemProps) => {
    const isConfirmed = isFuture(booking.date)
    return(
        <>
            <Card className=" min-w-[90%]">
              <CardContent className="flex justify-between p-0">
                {/* ESQUERDA */}
                <div className="flex flex-col gap-2 py-5 pl-5">
                  <Badge className="w-fit" variant={isConfirmed? 'default' : 'secondary'}>{isConfirmed ? 'Confirmado' : 'Finalizado'}</Badge>
                  <h3 className="font-semibold">{booking.service.name}</h3>

                 <div className="flex items-center">
                    <Avatar className="h-6 w-6">
                      <AvatarImage alt="Foto de Perfil" src={booking.service.barberShop.imageUrl}/>
                    </Avatar>
                    <p className="text-sm">{booking.service.barberShop.name}</p>
                 </div>

                </div>

                {/* DIREITA */}
                <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                  <p className="text-sm capitalize">{format(booking.date, "MMM", {locale: ptBR})}</p>
                  <p className="text-2xl">{format(booking.date, "dd", {locale: ptBR})}</p>
                  <p className="text-sm">{format(booking.date, "HH:mm", {locale: ptBR})}</p>
                </div>
              </CardContent>
            </Card>
        </>
    )

}

export default BookingItem;