import React from "react"
import { Popover, PopoverTrigger, Button, Avatar, AvatarImage, AvatarFallback, PopoverContent, } from "@/components/custom"
import { LogOut, User } from "lucide-react";

export default function UserMenu() {


const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
    setIsOpen(true)
    }, [])


  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Avatar className="size-12 cursor-pointer">
            <AvatarImage src="https://github.com/i-davies.png" />
            <AvatarFallback>ID</AvatarFallback>
        </Avatar>
        </PopoverTrigger>
        <PopoverContent align="end"
          className="w-80 overflow-hidden rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
            {/* Email */}
            <span className="font-medium text-muted-foreground">yuri.villanova@fatec.sp.gov.br</span>

            {/* Avatar */}
            <Avatar className="size-18">
                <AvatarImage src="https://github.com/i-davies.png" />
                <AvatarFallback>ID</AvatarFallback>
            </Avatar>

            {/* Mensagem */}
            <span className="text-xl text-muted-foreground">Olá, Icaro</span>

            {/* Ações */}
            <div className="w-full flex flex-col gap-4 p-3 py-0">
                <Button variant="outline" className="w-full font-medium rounded-4xl text-muted-foreground">
                    Gerenciar sua conta
                </Button>
                <Button variant="ghost" className="w-full rounded-4xl has-[>svg]:px-6 justify-start text-muted-foreground">
                    <User className="size-6 text-primary" /> 
                    <strong>Perfil:</strong>Administrador
                </Button>
                <Button variant="ghost" className="w-full rounded-4xl has-[>svg]:px-6 justify-start text-muted-foreground">
                    <LogOut className="size-6 text-primary" /> 
                    <strong>Sair</strong>
                </Button>
            </div>
            
        </PopoverContent>
    </Popover>
  )
}