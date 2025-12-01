import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/custom/header";
import { SidebarProvider } from "@/components/ui/sidebar";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    children: { control: false },
  },

  decorators: [
    (Story) => (
      <SidebarProvider>
        <div className="w-full">
          <Story />
        </div>
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

// sem children
export const Default: Story = {};

// com children
export const WithTitle: Story = {
  render: () => (
    <Header>
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold">Painel Administrativo</h2>
      </div>
    </Header>
  ),
};
