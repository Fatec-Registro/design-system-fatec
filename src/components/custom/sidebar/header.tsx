import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HeaderProps = {
  user: {
    name: string;
    group: string;
    avatar: string;
  };
};

export function Header({ user }: HeaderProps) {
  // Gera as iniciais do nome do usuário para o fallback
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <a href="#" className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src={user.avatar} alt="Avatar" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-xl font-medium">{user.name}</span>
                <span className="text-sm font-light">{user.group}</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
