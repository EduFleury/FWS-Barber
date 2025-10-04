import { Button } from "./ui/button";
import Image from "next/image";
import {DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { signIn } from "next-auth/react";

const SingInDialog = () =>{
    
    const handleLoginWithGoogleClick = () => signIn("google")
    
    return (
            <>
            <DialogHeader>
                <DialogTitle>
                    Faça seu Login na plataforma
                </DialogTitle>
                <DialogDescription>
                    Conecte-se usando sua conta do Google.
                </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className=" font-bold gap-1" onClick={handleLoginWithGoogleClick }>
                <Image src="/google.svg" width={18} height={18} alt="fazer login com Google"/>
                Google
            </Button>
            </>
    )
}

export default SingInDialog;