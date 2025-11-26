import { useState } from "react";
import { AppSidebar, type NavItem } from "@/components/custom/sidebar";
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
import { Center } from "@/components/custom/center";

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
  // Estado para controlar qual item está selecionado
  const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);

  // Callback chamado quando um item do menu é clicado
  const handleSelect = (item: NavItem) => {
    setSelectedItem(item);
    // Aqui você pode adicionar lógica adicional como:
    // - Navegação com React Router: navigate(item.url)
    // - Navegação com Next.js: router.push(item.url)
    // - Qualquer outra ação customizada
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={sidebarData} onSelect={handleSelect} />
      <SidebarInset className="bg-muted">
        <Header />
        <Center selectedItem={selectedItem} />
      </SidebarInset>
    </SidebarProvider>
  );
}
