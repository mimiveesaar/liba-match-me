import { MatchCard } from "./MatchCard";

export default {
  title: "Components/MatchCard",
  component: MatchCard,
};

const Template = (args) => <MatchCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  planet: "Arrakis",
  lookingFor: "Friendship",
  height: "5'4 since apparently it matters.",
};