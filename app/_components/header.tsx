import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {Sheet, SheetTrigger} from "./ui/sheet";
import SidebarSheets from "./sidebar-sheets";
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

                <SidebarSheets/>
            </Sheet>
        </CardContent>
    </Card>
    );
}

export default Header;