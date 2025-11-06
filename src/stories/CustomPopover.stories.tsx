import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type PopoverProps = ComponentProps<typeof Popover>;

type PopoverStoryArgs = PopoverProps & {
  buttonLabel: string;
  contentHTML: string;
};

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    buttonLabel: {
      control: { type: "text" },
      description: "Texto exibido no botão que abre o popover",
    },
    contentHTML: {
      control: { type: "textarea" },
      description: "HTML renderizado dentro do PopoverContent",
    },
  } as any,
};

export default meta;

type Story = StoryObj<PopoverStoryArgs>;

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Abrir Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        Este é um popover simples.
      </PopoverContent>
    </Popover>
  ),
};


export const WithHTMLContent: Story = {
  args: {
    buttonLabel: "Abrir Popover",
    contentHTML: `
      <h3>Conteúdo Personalizado</h3>
      <p><strong>Este texto foi inserido via Controls!</strong></p>
      <ul>
        <li>✅ Suporta tags HTML</li>
        <li>🔤 Texto formatado</li>
        <li>🧩 Listas, links e imagens</li>
      </ul>
    `,
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>{args.buttonLabel}</Button>
      </PopoverTrigger>

      <PopoverContent>
        <div
          dangerouslySetInnerHTML={{
            __html: args.contentHTML,
          }}
        />
      </PopoverContent>
    </Popover>
  ),
};
