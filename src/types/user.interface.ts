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
}

export interface LayoutProps{
  content:ContentItem;
  sectionRefs: ReturnType<typeof useRef<{ [Key: string] : HTMLDivElement | null}>>
}
