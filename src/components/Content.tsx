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
              {/* Render the appropriate layout */}
              <LayoutComponent content={content} sectionRefs={sectionRefs} />

              {/* Sub Sections (same for all layouts) */}
              {content.subItems &&
                content.subItems.map((subItem) => {
                  const hasCards =
                    subItem.cardData && subItem.cardData.cards.length > 0;

                  // Parse content to separate paragraphs and bullet points
                  const contentLines = subItem.content.split("\n");
                  const parsedContent: Array<{
                    type: "paragraph" | "bullets" | "heading";
                    content: string | string[];
                  }> = [];
                  let currentBullets: string[] = [];

                  contentLines.forEach((line, index) => {
                    const trimmedLine = line.trim();

                    // Check if it's a bullet point (starts with •)
                    if (trimmedLine.startsWith("•")) {
                      currentBullets.push(trimmedLine.substring(1).trim());
                    } else {
                      // If we have accumulated bullets, add them first
                      if (currentBullets.length > 0) {
                        parsedContent.push({
                          type: "bullets",
                          content: currentBullets,
                        });
                        currentBullets = [];
                      }

                      // Check if it's a heading (starts with **)
                      if (
                        trimmedLine.startsWith("**") &&
                        trimmedLine.endsWith("**")
                      ) {
                        const headingText = trimmedLine.slice(2, -2);
                        parsedContent.push({
                          type: "heading",
                          content: headingText,
                        });
                      } else if (trimmedLine.length > 0) {
                        // It's a regular paragraph
                        parsedContent.push({
                          type: "paragraph",
                          content: trimmedLine,
                        });
                      }
                    }

                    // Handle any remaining bullets at the end
                    if (
                      index === contentLines.length - 1 &&
                      currentBullets.length > 0
                    ) {
                      parsedContent.push({
                        type: "bullets",
                        content: currentBullets,
                      });
                    }
                  });

                  const colorMap: Record<
                    string,
                    { bg: string; border: string; text: string }
                  > = {
                    blue: {
                      bg: "bg-blue-50",
                      border: "border-blue-300",
                      text: "text-blue-700",
                    },
                    purple: {
                      bg: "bg-purple-50",
                      border: "border-purple-300",
                      text: "text-purple-700",
                    },
                    green: {
                      bg: "bg-green-50",
                      border: "border-green-300",
                      text: "text-green-700",
                    },
                    red: {
                      bg: "bg-red-50",
                      border: "border-red-300",
                      text: "text-red-700",
                    },
                    yellow: {
                      bg: "bg-yellow-50",
                      border: "border-yellow-300",
                      text: "text-yellow-700",
                    },
                    pink: {
                      bg: "bg-pink-50",
                      border: "border-pink-300",
                      text: "text-pink-700",
                    },
                  };

                  return (
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
                            Subsection {subItem.id}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                          {subItem.title}
                        </h3>

                        {/* Render mixed content */}
                        <div className="space-y-4">
                          {parsedContent.map((block, blockIndex) => {
                            if (block.type === "bullets") {
                              return (
                                <ul key={blockIndex} className="space-y-2 my-4">
                                  {(block.content as string[]).map(
                                    (point, pointIndex) => (
                                      <li
                                        key={pointIndex}
                                        className="flex items-start gap-3"
                                      >
                                        <span className="shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                                        <span className="text-gray-700 leading-relaxed">
                                          {point}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              );
                            } else if (block.type === "heading") {
                              return (
                                <h4
                                  key={blockIndex}
                                  className="text-xl font-bold text-gray-900 mt-6 mb-3"
                                >
                                  {block.content}
                                </h4>
                              );
                            } else {
                              return (
                                <p
                                  key={blockIndex}
                                  className="text-gray-700 leading-relaxed"
                                >
                                  {block.content}
                                </p>
                              );
                            }
                          })}
                        </div>

                        {/* Card Grid (if cardData exists) */}
                        {hasCards && (
                          <div
                            className={`grid gap-6 mb-8 ${
                              subItem.cardData!.cards.length === 2
                                ? "grid-cols-1 md:grid-cols-2"
                                : subItem.cardData!.cards.length === 3
                                ? "grid-cols-1 md:grid-cols-3"
                                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                            }`}
                          >
                            {subItem.cardData!.cards.map((card, cardIndex) => {
                              const colors = colorMap[card.color || "blue"];
                              return (
                                <div
                                  key={cardIndex}
                                  className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105`}
                                >
                                  {card.icon && (
                                    <div className="text-4xl mb-4">
                                      {card.icon}
                                    </div>
                                  )}
                                  <h5
                                    className={`text-lg font-bold ${colors.text} mb-2`}
                                  >
                                    {card.title}
                                  </h5>
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.description}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Content;
