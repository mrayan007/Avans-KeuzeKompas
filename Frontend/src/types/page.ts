// Pages
import Home from "../pages/home";
import Recommend from "../pages/recommend";
import Cmd from "../pages/cmd";

export type Page =
  typeof Home
  | typeof Recommend
  | typeof Cmd;
