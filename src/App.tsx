import { Button } from "@/components/custom/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/custom/avatar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/custom/sidebar";

export default function App() {
  return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Exemplo de Botão</Button>

            <Avatar className="size-12">
              <AvatarImage src="https://github.com/i-davies.png" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
          </div>
        </SidebarInset>
      </SidebarProvider>
  );
}