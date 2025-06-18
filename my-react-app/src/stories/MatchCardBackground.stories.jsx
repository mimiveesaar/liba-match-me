import { CardBackground } from "../components/Matches/cards/MatchCardBackground";

export default {
  title: "Atoms/CardBackground",
  component: CardBackground,
};

const Template = (args) => <CardBackground {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>This is inside the card background.</p>,
};