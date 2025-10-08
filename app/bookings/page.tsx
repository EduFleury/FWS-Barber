import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { notFound } from "next/navigation";
import BookingItem from "../_components/booking-item";
import { getConfirmedBookings } from "../_date/get-confirmed-bookings";
import { getConcluedBookings } from "../_date/get-conclueded-bookings";

const Bookings = async () =>{

    const session = await getServerSession(authOptions)

    if(!session?.user){
        //MOSTRAR PopUp de Login  
        return notFound()
    }

    const confirmedBookings = await getConfirmedBookings()

    const concludeddBookings = await getConcluedBookings()

    return (
    <>
        <Header/>
        <div className=" p-5 space-y-3">
            <h1 className=" text-xl font-bold">Agendamentos</h1>
            {confirmedBookings.length == 0 && concludeddBookings.length == 0 && (
                <p className="text-gray-400">Você não tem agendamentos.</p>
            )}
            {confirmedBookings.length > 0 && (

                <>
                    <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
                        Confirmados
                    </h2>

                    {confirmedBookings.map(booking =>
                     <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))}></BookingItem>
                    )}
                </>
            )}

            {concludeddBookings.length > 0 && (
                <>
                    <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
                        Finalizados
                    </h2>
                    {concludeddBookings.map(booking =>
                     <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))}></BookingItem>
                    )}
                </>
            )}

        </div>
    </>
    )
}

export default Bookings;