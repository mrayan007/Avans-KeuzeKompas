// Types
import type { Page } from "../types/page";

export interface PageProps {
  title: (text: string) => void;
  openWindow: (page: Page, data?: any) => void;
  data?: any;
}
