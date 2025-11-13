import { SidebarTrigger } from "@/components/ui/sidebar";
import UserMenu from "@/components/custom/user-menu";
import { SearchForm } from "@/components/custom/search-form";
import { Popover, PopoverTrigger, PopoverContent  } from "@/components/custom/popover";
import { Button } from "@/components/custom/button";
import { Bell } from "lucide-react";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-18 shrink-0 items-center justify-between gap-2 border-b px-4 bg-white">
      <SidebarTrigger className="-ml-1" />
      {children}
      <div className="flex items-center gap-6 md:gap-4 sm:gap2">
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        <Popover>
            <PopoverTrigger>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0 cursor-pointer">
                <Bell className="size-4 text-primary" />
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <h3 className="font-semibold text-lg">Notificações</h3>
                  <span className="text-xs text-muted-foreground">3 novas</span>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Notificação 1 */}
                  <div className="flex gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Nova avaliação disponível</p>
                      <p className="text-xs text-muted-foreground">Avaliação Integradora - Matemática I</p>
                      <span className="text-xs text-muted-foreground">Há 5 minutos</span>
                    </div>
                  </div>
                  {/* Notificação 2 */}
                  <div className="flex gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Certificado emitido</p>
                      <p className="text-xs text-muted-foreground">Seu certificado está pronto para download</p>
                      <span className="text-xs text-muted-foreground">Há 1 hora</span>
                    </div>
                  </div>
                  {/* Notificação 3 */}
                  <div className="flex gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Novo anúncio publicado</p>
                      <p className="text-xs text-muted-foreground">Calendário acadêmico atualizado</p>
                      <span className="text-xs text-muted-foreground">Há 3 horas</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-2">
                  <button className="w-full text-sm text-center text-primary hover:underline">
                    Ver todas as notificações
                  </button>
                </div>
              </div>
            </PopoverContent>
        </Popover>
        <UserMenu />
      </div>
    </header>
  );
}
