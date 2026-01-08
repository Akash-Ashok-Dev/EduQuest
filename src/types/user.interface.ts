import type { useRef } from "react";

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  content: string;
  subItems?: SubItem[];
}

interface SubItem{
  id:string;
  title: string;
  content:string;
  cardData ?: CardData;
}

export interface LayoutProps{
  content:ContentItem;
  sectionRefs: ReturnType<typeof useRef<{ [Key: string] : HTMLDivElement | null}>>
}

export interface CardData {
  type: 'info' | 'feature' | 'person' | 'tip' | 'resource';
  cards: Array<{
    title: string;
    description: string;
    icon?: string;
    color?: string;
    link?: string;
  }>;
}
