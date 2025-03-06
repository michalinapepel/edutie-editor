import { ReactNode } from "react";

export interface Block<T> {
  id: string;
  data: T;
  renderBlock: () => ReactNode;
}
