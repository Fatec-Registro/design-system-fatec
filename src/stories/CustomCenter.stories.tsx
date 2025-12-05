import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@/components/custom/center";
import type { NavItem } from "@/components/custom/sidebar/nav-main";

const meta = {
    title: "Components/Center",
    component: Center,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            source: {
                code: `
import { Center } from "@/components/custom/center";

<Center selectedItem={null} />
        `,
            },
        },
    },
    argTypes: {
        selectedItem: {
            control: "object",
            description: "Item do menu atualmente selecionado",
        },
        renderContent: {
            control: false,
            description: "Função opcional para renderizar conteúdo customizado.",
        },
        children: {
            control: false,
            description: "Conteúdo adicional renderizado dentro do card.",
        },
    },
} satisfies Meta<typeof Center>;

export default meta;

type Story = StoryObj<typeof Center>;

const mockItem: NavItem = {
    title: "Biblioteca",
    url: "#",
    icon: undefined,
};

export const Default: Story = {
    args: {
        selectedItem: null,
    },
};

export const WithSelectedItem: Story = {
    args: {
        selectedItem: mockItem,
    },
};
