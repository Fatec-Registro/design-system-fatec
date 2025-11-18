import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "@/components/custom/search-form";

const meta = {
  title: "Components/SearchForm",
  component: SearchForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `<SearchForm className="w-full sm:ml-auto sm:w-auto" />`,
        language: "tsx",
      },
    },
  },
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {};
