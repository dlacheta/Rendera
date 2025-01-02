import type { Meta, StoryObj } from "@storybook/react";

import { SpiralLines as SpiralLinesComponent } from "./SpiralLines";

const meta = {
  title: "Spiral Lines",
  component: SpiralLinesComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SpiralLinesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpiralLines: Story = {};
