export type ChoiceType = {
  id: number;
  name: string;
  component: () => JSX.Element;
  losesTo: number;
};

import Rock from "./svgs/Rock";
import Scissors from "./svgs/Scissors";
import Paper from "./svgs/paper";
export const gameChoices = [
  { id: 1, name: "rock", component: Rock, losesTo: 2 },
  { id: 2, name: "paper", component: Paper, losesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];
