"use client";

import * as React from "react";

import { NavMain } from "@/components/custom/sidebar/nav-main";
import { Header } from "@/components/custom/sidebar/header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { LucideIcon } from "lucide-react";

type SidebarData = {
  user: {
    name: string;
    group: string;
    avatar: string;
  };
  navMain: {
    title: string;
    url: string;
    isActive?: boolean;
    items?: {
      icon?: LucideIcon;
      title: string;
      url: string;
    }[];
  }[];
};

export function AppSidebar({ 
  data,
  ...props 
}: React.ComponentProps<typeof Sidebar> & {
  data: SidebarData;
}) {
  return (
    <Sidebar {...props}>
      <Header user={data.user} />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
