import { AppSidebar } from "@/components/custom/sidebar";
import { Header } from "@/components/custom/header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  BookCheck,
  Megaphone,
  SquareLibrary,
  GraduationCap,
  BadgeCheck,
  ListTodo,
  FileBadge,
} from "lucide-react";

const sidebarData = {
  user: {
    name: "Icaro Davies",
    group: "Administrador",
    avatar: "https://github.com/i-davies.png",
  },
  navMain: [
    {
      title: "Aplicações",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Academies Hub",
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
          icon: FileBadge,
        },
      ],
    },
    {
      title: "Meu Perfil",
      url: "#",
    },
    {
      title: "Gerenciar Usuários",
      url: "#",
    },
    {
      title: "Sair",
      url: "#",
    },
  ],
};

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={sidebarData} />
      <SidebarInset className="bg-muted">
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min shadow" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
