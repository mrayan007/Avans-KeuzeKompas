// Types
import type { Page } from "../types/page";

export class App {
  readonly id: number;
  readonly name: string;
  readonly iconUrl: string;
  readonly page: Page;

  constructor(
    id: number,
    name: string,
    iconUrl: string,
    page: Page
  ) {
    this.id = id;
    this.name = name;
    this.iconUrl = iconUrl;
    this.page = page;
  }
}
