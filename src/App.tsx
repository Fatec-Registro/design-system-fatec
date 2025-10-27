import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
} from "@/components/custom";
import { User } from "lucide-react";
import UserMenu from "./components/custom/user-menu";

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-4">
      <Button>Exemplo de Botão</Button>

      <Avatar className="size-12">
        <AvatarImage src="https://github.com/i-davies.png" />
        <AvatarFallback>ID</AvatarFallback>
      </Avatar>

      <Avatar className="size-12">
        <AvatarFallback>ID</AvatarFallback>
      </Avatar>

      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <UserMenu />
    </div>
  );
}
