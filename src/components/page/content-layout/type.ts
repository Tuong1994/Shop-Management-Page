import type { ReactNode } from "react";

export type TabItem = {
    id: string;
    name: ReactNode;
    icon: ReactNode
    path: string;
}

export type TabItems = TabItem[]