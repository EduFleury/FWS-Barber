import { CalendarRangeIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import {SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/serach";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from "./ui/dialog";

const SidebarSheets = () =>{
    return (
        <SheetContent className=" overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="py-5 border-b border-solid flex justify-between items-center gap-3">
                <h2 className=" font-bold">Olá, faça seu login!</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon">
                            <LogInIcon/>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%]">
                        <DialogHeader>
                            <DialogTitle>
                                Faça seu Login na plataforma
                            </DialogTitle>

                            <DialogDescription>
                                Conecte-se usando sua conta do Google.
                            </DialogDescription>
                        </DialogHeader>
                        <Button variant="outline" className=" font-bold gap-1">
                            <Image src="/google.svg" width={18} height={18} alt="fazer login com Google"/>
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>
                {/* <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww">
                    </AvatarImage>
                </Avatar>
                <div>
                    <p className=" font-bold">Eduardo Fleury</p>
                    <p className=" text-gray-400 text-xs">eduardopinafleury@gmail.com</p>
                </div> */}
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
                <Button className=" justify-start gap-2" variant="ghost"><CalendarRangeIcon size={18}/>Agendamento</Button>
            </div>
            <div className="py-5 flex flex-col gap-1 border-b border-solid">
                {quickSearchOptions.map(option => (
                    <Button key={option.title} className=" justify-start gap-2" variant="ghost">
                        <Image src={option.imageUrl} height={18} width={18} alt={option.title}/>
                        {option.title}
                    </Button>
                ))}
            </div>
            <div className="py-5 flex flex-col gap-1">
                <Button className=" justify-start gap-2" variant="ghost"><LogOutIcon size={18}/>Sair da Conta</Button>
            </div>
        </SheetContent>
    )
}

export default SidebarSheets;