import type { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "@/components/custom/sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  GraduationCap,
  Megaphone,
  BookCheck,
} from "lucide-react";

const sidebarData = {
  user: {
    name: "Maylon de Oliveira",
    group: "Administrador",
    avatar: "https://github.com/maylonho.png",
  },
  navMain: [
    {
      title: "Aplicações",
      url: "#",
      isActive: true,
      items: [
        { title: "Academies Hub", url: "#", icon: GraduationCap },
        { title: "Anúncios", url: "#", icon: Megaphone },
        { title: "Avaliação Integradora", url: "#", icon: BookCheck },
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

const meta = {
  title: "Components/Sidebar",
  component: AppSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: `

const sidebarData = ${JSON.stringify(sidebarData, null, 2)}
<SidebarProvider
  style={
    {
      "--sidebar-width": "20rem",
    } as React.CSSProperties
  }
>
<AppSidebar data={sidebarData} />
    <SidebarInset className="bg-muted">
        ***Conteúdo da página***
    </SidebarInset>
</SidebarProvider>

        `,
        language: "tsx",
      },
    },
  },

  decorators: [
    (Story, context) => (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
          } as React.CSSProperties
        }
      >
        <div style={{ position: "relative", zIndex: 10 }}>
          <Story {...context} />
        </div>
        <div style={{ display: "none" }}>
          <SidebarInset />
        </div>
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof AppSidebar>;

export default meta;

type Story = StoryObj<typeof AppSidebar>;

export const Default: Story = {
  args: {
    data: sidebarData,
  },
};
