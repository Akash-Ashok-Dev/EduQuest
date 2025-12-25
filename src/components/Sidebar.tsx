import React from "react";
import type { ContentItem } from "../types/user.interface";

interface SidebarProps {
  items: ContentItem[];
  activeId: string;
  expandedIds: Set<string>;
  onItemClick: (id: string) => void;
  // onToggleExpand: (id: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeId,
  expandedIds,
  onItemClick,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === "") {
      e.preventDefault();
      onItemClick(id);
    }
  };

  return (
    <aside className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto sticky top-0 h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Documentation</h1>
        <p className="text-sm text-gray-500 mb-6">
          Select a topic to learn more
        </p>

        <nav>
          <ul className="space-y-1">
            {items.map((item) => {
              const isExpanded = expandedIds.has(item.id);
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <li key={item.id}>
                  <div
                    onClick={() => onItemClick(item.id)}
                    onKeyDown={(e) => handleKeyPress(e, item.id)}
                    role="button"
                    tabIndex={0}
                    className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeId === item.id
                        ? "bg-blue-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-semibold">{item.title}</div>
                    <div
                      className={`text-sm mt-1 ${
                        activeId === item.id ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </div>
                  </div>
                  {hasSubItems && isExpanded && (
                    <ul>
                      {item.subItems!.map((subItem) => (
                        <li
                          key={subItem.id}
                          onClick={() => onItemClick(subItem.id)}
                          onKeyDown={(e) => handleKeyPress(e, subItem.id)}
                          role="button"
                          tabIndex={0}
                          className={`px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                            activeId === subItem.id
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {subItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
