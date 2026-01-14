// Models
import { App } from "../models/app";

// Icons
import homeIcon from '../assets/apps/home.ico';
import recommenderIcon from '../assets/apps/recommender.ico';

// Pages
import Home from "../pages/home";
import Recommend from "../pages/recommend";

export const apps: App[] = [
  new App(0, 'Home', homeIcon, Home),
  new App(1, 'Module Recommender', recommenderIcon, Recommend)
];
