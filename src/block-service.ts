import { ReactNode } from "react";

export interface Block<T> {
  data: T;
  id: string;
  renderBlock: () => ReactNode;
}
