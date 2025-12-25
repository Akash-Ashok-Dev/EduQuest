import React, { useEffect, useRef } from "react";
import type { ContentItem, LayoutProps } from "../types/user.interface";
import CardViewLayout from "./ContentViews/CardView";
import TimelineLayout from "./ContentViews/Timeline";
import CodeLayout from "./ContentViews/CodeView";
import RegularLayout from "./ContentViews/Regular";

const LayoutMap: Record<string, React.FC<LayoutProps>> = {
  "2": CardViewLayout,
  "4": TimelineLayout,
  "5": CodeLayout,
};
interface ContentProps {
  items: ContentItem[];
  sectionRefs: ReturnType<
    typeof useRef<{ [Key: string]: HTMLDivElement | null }>
  >;
  onScroll: (id: string) => void;
}
const Content: React.FC<ContentProps> = ({ items, sectionRefs, onScroll }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const allSections: { id: string; parentId?: string }[] = [];
      items.forEach((item) => {
        allSections.push({ id: item.id });
        if (item.subItems) {
          item.subItems.forEach((sub) => {
            allSections.push({ id: sub.id, parentId: item.id });
          });
        }
      });

      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = sectionRefs.current?.[allSections[i].id];
        if (section && section.offsetTop <= scrollPosition) {
          onScroll(allSections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, onscroll, sectionRefs]);

  return (
    <main className="w-2/3 ovverflow-y-auto">
      <div className="p-12">
        {items.map((content) => {
          const LayoutComponent = LayoutMap[content.id] || RegularLayout;

          return (
            <div key={content.id}>
              <LayoutComponent content={content} sectionRefs={sectionRefs} />

              {content.subItems &&
                content.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    ref={(el) => {
                      if (sectionRefs.current) {
                        sectionRefs.current[subItem.id] = el;
                      }
                    }}
                    className="mb-16 ml-8"
                  >
                    <div className="max-w-3xl">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full">
                          Subsection {content.id}.{subItem.id}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {subItem.title}
                      </h3>
                      <div className="prose text-gray-700 leading-relaxed">
                        {subItem.content}
                      </div>

                      <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Subsection Tip
                        </h4>
                        <p className="text-purple-800">
                          This subsection provides detailed information about{" "}
                          {subItem.title.toLowerCase()}.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Content;
