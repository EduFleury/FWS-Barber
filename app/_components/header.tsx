import { CalendarRangeIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet";import { quickSearchOptions } from "../_constants/serach";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
const Header = () => {
    
    return(
    <Card>
        <CardContent className="p-5 flex flex-row items-center justify-between">
            <Image src="/logo.png" alt="Logo Barber" height={18} width={120}></Image>

            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent className=" overflow-y-auto">

                    <SheetHeader>
                        <SheetTitle className="text-left">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="py-5 border-b border-solid flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww">
                            </AvatarImage>
                        </Avatar>

                        <div>
                            <p className=" font-bold">Eduardo Fleury</p>
                            <p className=" text-gray-400 text-xs">eduardopinafleury@gmail.com</p>
                        </div>
                    </div>

                    <div className="py-5 flex flex-col gap-1 border-b border-solid">
                        <SheetClose>
                            <Button className=" justify-start gap-2" variant="ghost" asChild>
                                <Link href="/"><HomeIcon size={18}/>Inicio</Link>
                            </Button>
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
            </Sheet>
        </CardContent>
    </Card>
    );
}

export default Header;