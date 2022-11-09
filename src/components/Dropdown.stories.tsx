// Dropdown.stories.tsx
import * as React from "react";
import { ComponentStory } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";
import { action } from "@storybook/addon-actions";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
  <Dropdown {...args} />
);
const options = [
  {
    selected: false,
    label: "Affenpinscher",
    key: 1,
    content: [
      "Affenpinscher",
      "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    ],
    colorCode: "#FBD960",
  },
  {
    selected: true,
    label: "Afghan Hound",
    key: 2,
    content: ["Afghan Hound", "Aloof, Clownish, Dignified, Independent, Happy"],
    colorCode: "#AAE9A0",
  },
  {
    selected: false,
    label: "African Hunting Dog",
    key: 3,
    content: ["African Hunting Dog", "Wild, Hardworking, Dutiful"],
    colorCode: "#99DAFF",
  },
  {
    selected: false,
    label: "Airedale Terrier",
    key: 4,
    content: [
      "Airedale Terrier",
      "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
    ],
    colorCode: "#967ef6",
  },
  {
    selected: false,
    label: "Akbash Dog",
    key: 5,
    content: ["Akbash Dog", "Loyal, Independent, Intelligent, Brave"],
    colorCode: "#239062",
  },
  {
    selected: false,
    label: "Akita",
    key: 6,
    content: [
      "Akita",
      "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
    ],
    colorCode: "#a5ba14",
  },
  {
    selected: false,
    label: "Alapaha Blue Blood Bulldog",
    key: 7,
    content: [
      "Alapaha Blue Blood Bulldog",
      "Loving, Protective, Trainable, Dutiful, Responsible",
    ],
    colorCode: "#37b69a",
  },
];

export const DropdownDefaultState = Template.bind({});
DropdownDefaultState.args = {
  options: options,
  value: {
    selected: false,
    label: "",
    key: 0,
    content: [],
    colorCode: "",
  },
  title: "Hunderase",
  placeholderText: "Velg hunderase",
  onChange: action("on change"),
};

export const DropdownDefaultSelected = Template.bind({});
DropdownDefaultSelected.args = {
  options: options,
  value: {
    selected: true,
    label: "Afghan Hound",
    key: 2,
    content: ["Afghan Hound", "Aloof, Clownish, Dignified, Independent, Happy"],
    colorCode: "#AAE9A0",
  },
  title: "Hunderase",
  placeholderText: "Velg hunderase",
  onChange: action("on change"),
};
