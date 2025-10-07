"use client"
import { CalendarRangeIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import {SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/serach";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { signOut, useSession } from "next-auth/react";
import SingInDialog from "./sing-in-dialog";


const SidebarSheets = () =>{

    const {data} = useSession();
    // const handleLoginWithGoogleClick = () => signIn("google")
    const handleSingOutClick = () => signOut()

    return (
        <SheetContent className=" overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="py-5 border-b border-solid flex justify-between items-center gap-3">
                
                {data?.user ? (
                   <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={data?.user.image ?? ""}>
                        </AvatarImage>
                    </Avatar>
                    <div>
                        <p className=" font-bold">{data?.user.name}</p>
                        <p className=" text-gray-400 text-xs">{data?.user.email}</p>
                    </div>
                   </div>
                ):(
                    <>
                        <h2 className=" font-bold">Olá, faça seu login!</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="icon">
                                    <LogInIcon/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[90%]">
                                <SingInDialog/>
                            </DialogContent>
                        </Dialog>
                    </>
                )}
            </div>
            <div className="py-5 flex flex-col gap-1 border-b border-solid">
                <SheetClose asChild>
                  <Link href="/">
                    <Button className="justify-start gap-2" variant="ghost">
                      <HomeIcon size={18}/> 
                      Início
                    </Button>
                  </Link>
                </SheetClose>
                <Button className=" justify-start gap-2" variant="ghost" asChild>
                    <Link href={"/bookings"}><CalendarRangeIcon size={18}/>Agendamento</Link>
                </Button>
            </div>
            <div className="py-5 flex flex-col gap-1 border-b border-solid">
                <h3 className=" text-gray-400 ml-3">Serviços</h3>
                {quickSearchOptions.map(option => (
                    <SheetClose key={option.title} asChild>
                        <Link href={`/barbershops?service=${option.title}`}>
                            <Button className=" justify-start gap-2" variant="ghost">
                                    <Image src={option.imageUrl} height={18} width={18} alt={option.title}/>
                                {option.title}
                            </Button>
                        </Link>
                    </SheetClose>
                ))}
            </div>

            {data?.user && (
                <div className="py-5 flex flex-col gap-1">
                    <Button className=" justify-start gap-2" variant="ghost" onClick={handleSingOutClick}><LogOutIcon size={18}/>Sair da Conta</Button>
                </div>
            )}
        </SheetContent>
    )
}

export default SidebarSheets;