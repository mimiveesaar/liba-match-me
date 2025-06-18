import { AlienCard } from "./AlienCard";

export default {
  title: "Components/AlienCard",
  component: AlienCard,
};

const Template = (args) => <AlienCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  planet: "Arrakis",
  lookingFor: "Friendship",
  height: "5'4 since apparently it matters.",
};