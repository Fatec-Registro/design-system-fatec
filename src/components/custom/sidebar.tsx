"use client";

import * as React from "react";

import { NavMain, type NavItem, type NavMainItem } from "@/components/custom/sidebar/nav-main";

// Re-exporta os tipos para facilitar o uso
export type { NavItem, NavMainItem };
import { Header } from "@/components/custom/sidebar/header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

export type SidebarUser = {
  name: string;
  group: string;
  avatar: string;
};

export type SidebarData = {
  user: SidebarUser;
  navMain: NavMainItem[];
};

export type AppSidebarProps = Omit<React.ComponentProps<typeof Sidebar>, 'onSelect'> & {
  data: SidebarData;
  /** Callback chamado quando um item do menu é selecionado */
  onSelect?: (item: NavItem, event: React.MouseEvent) => void;
};

export function AppSidebar({ 
  data,
  onSelect,
  ...props 
}: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <Header user={data.user} />
      <SidebarContent>
        <NavMain items={data.navMain} onSelect={onSelect} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
