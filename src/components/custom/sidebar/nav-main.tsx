"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export type NavItem = {
  title: string
  url: string
  icon?: LucideIcon
}

export type NavMainItem = {
  title: string
  url: string
  isActive?: boolean
  items?: NavItem[]
}

export type NavMainProps = {
  items: NavMainItem[]
  /** Callback chamado quando um item do menu é clicado */
  onSelect?: (item: NavItem, event: React.MouseEvent) => void
}

export function NavMain({
  items,
  onSelect,
}: NavMainProps) {
  const handleClick = (item: NavItem, event: React.MouseEvent) => {
    if (onSelect) {
      event.preventDefault()
      onSelect(item, event)
    }
  }
  return (
    <SidebarGroup>
      <SidebarMenu className="flex gap-4 py-4">
        {items.map((item) => {
          // Verifica se o item possui subitens
          const hasSubItems = item.items && item.items.length > 0;

          // Renderização condicional baseada na existência de subitens
          return hasSubItems ? (
            // CASO 1: Item COM subitens - Renderiza com Collapsible
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {/* Botão principal que expande/colapsa os subitens */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    <span className="text-xl font-light">{item.title}</span>
                    {/* Ícone de chevron que rotaciona ao expandir */}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {/* Conteúdo expansível com os subitens */}
                <CollapsibleContent className="py-4">
                  <SidebarMenuSub className="border-0 gap-6 mx-0">
                    {/* Mapeia e renderiza cada subitem */}
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild iconSize="lg">
                          <a 
                            href={subItem.url}
                            onClick={(e) => handleClick(subItem, e)}
                          >
                            {subItem.icon && <subItem.icon />}
                            <span className="text-lg font-medium">{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            // CASO 2: Item SEM subitens - Renderiza link direto sem Collapsible
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a 
                  href={item.url}
                  onClick={(e) => handleClick(item, e)}
                >
                  <span className="text-xl font-light">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
