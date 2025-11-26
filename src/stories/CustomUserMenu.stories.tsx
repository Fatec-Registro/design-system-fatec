import type { Meta, StoryObj } from "@storybook/react-vite";
import UserMenu from '@/components/custom/user-menu';

const meta = {
  title: "Components/UserMenu",
  component: UserMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

