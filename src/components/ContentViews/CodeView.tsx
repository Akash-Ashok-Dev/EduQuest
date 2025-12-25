import type { LayoutProps } from "../../types/user.interface";

// Code-focused Layout (Section 5)
const CodeLayout: React.FC<LayoutProps> = ({ content, sectionRefs }) => (
  <div
    ref={(el) => {
      if (sectionRefs.current) {
        sectionRefs.current[content.id] = el;
      }
    }}
    className="mb-20 min-h-screen"
  >
    <div className="max-w-4xl">
      <div className="bg-gray-900 text-green-400 p-8 rounded-xl font-mono shadow-2xl">
        <div className="flex items-center gap-2 mb-6 text-gray-400">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm">~/advanced-topics</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-500">$</span>{" "}
          <span className="text-white">
            cat {content.title.toLowerCase().replace(/ /g, "-")}.md
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4"># {content.title}</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {content.description}
        </p>
        <div className="bg-black bg-opacity-50 p-4 rounded">
          <pre className="text-sm text-green-300">{content.content}</pre>
        </div>
      </div>
    </div>
  </div>
);

export default CodeLayout;
