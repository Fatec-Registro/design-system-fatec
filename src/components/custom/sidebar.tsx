"use client";

import * as React from "react";

import {
  BookCheck,
  Megaphone,
  SquareLibrary,
  GraduationCap,
  BadgeCheck,
  ListTodo,
  FileBadge,
  ExternalLinkIcon,
} from "lucide-react";

import { NavMain } from "@/components/custom/sidebar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

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
    icon: FileBadge,
  },
];

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Aplicações",
      url: "#",
      icon: GraduationCap,
      isActive: true,
      items: [
        {
          title: "Academies Hub",
          url: "#",
        },
        {
          title: "Anúncios",
          url: "#",
        },
        {
          title: "Avaliação Integradora",
          url: "#",
        },
        {
          title: "Biblioteca",
          url: "#",
        },
        {
          title: "Emissão de Certificados",
          url: "#",
        },
        {
          title: "PACE",
          url: "#",
        },
        {
          title: "QTE",
          url: "#",
        },
      ],
    },
    {
      title: "Meu Perfil",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Gerenciar Usuários",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Sair",
      url: "#",
      icon: ExternalLinkIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
