import { ButtonComponent } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ButtonComponent",
  component: ButtonComponent,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);
export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#583fb3", children: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, children: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, children: "📚📕📈🤓" };
