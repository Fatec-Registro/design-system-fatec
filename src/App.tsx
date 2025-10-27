import { Button } from "@/components/custom/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/custom/avatar";

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Exemplo de Botão</Button>

      <Avatar className="size-12">
        <AvatarImage src="https://github.com/i-davies.png" />
        <AvatarFallback>ID</AvatarFallback>
      </Avatar>
    </div>
  );
}