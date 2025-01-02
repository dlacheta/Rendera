import type { Meta, StoryObj } from "@storybook/react";

import { SnakeLines as SnakeLinesComponent } from "./SnakeLines";

const meta = {
  title: "Snake Lines",
  component: SnakeLinesComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SnakeLinesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SnakeLines: Story = {};
