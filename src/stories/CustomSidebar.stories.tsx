import type { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "@/components/custom/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const meta = {
  title: "Components/Sidebar",
  component: AppSidebar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen={true}>
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof AppSidebar>;

export default meta;

type Story = StoryObj<typeof AppSidebar>;

const mockData = {
  user: {
    name: "Maylon de Oliveira",
    group: "Administrador",
    avatar: "https://github.com/maylonho.png",
  },
  navMain: [
    { title: "Academies Hub", url: "/#" },
    { title: "Anúncios", url: "/#" },
    { title: "Avaliação Integradora", url: "/#" },
  ],
};

export const Default: Story = {
  args: {
    data: mockData,
  },
};
