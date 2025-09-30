"use client"

import {SmartphoneIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { toast } from "sonner";

interface PhoneProps{

    phone: string;
}

const PhoneItem = ({phone}:PhoneProps) =>{

    const handleCopyPhoneClick = (phone:string) =>{
        navigator.clipboard.writeText(phone)
        toast.success("Telefone copiado com sucesso.")
    }

    return (
        <div className=" flex justify-between" key={phone}>
            <div className="flex items-center gap-2">
                <SmartphoneIcon/>
                <p className=" text-sm">{phone}</p>
            </div>

            <div>
                <Button variant="outline" size="sm" onClick={ () => handleCopyPhoneClick(phone)}>
                Copiar
                </Button>
            </div>
        </div>
    )
}

export default PhoneItem;