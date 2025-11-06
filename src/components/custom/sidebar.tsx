import { BookCheck, Megaphone, SquareLibrary, Settings, GraduationCap, BadgeCheck, ListTodo } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Acamies Hub",
    url: "#",
    icon: GraduationCap,
  },
  {
    title: "Anúncios",
    url: "#",
    icon: Megaphone,
  },
  {
    title: "Avaliação Integradora",
    url: "#",
    icon: BookCheck,
  },
  {
    title: "Biblioteca",
    url: "#",
    icon: SquareLibrary,
  },
  {
    title: "Emissão de Certificados",
    url: "#",
    icon: BadgeCheck,
  },
  {
    title: "PACE",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "QTE",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-72">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}