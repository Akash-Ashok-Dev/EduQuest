import type { LayoutProps } from "../../types/user.interface";

const RegularLayout: React.FC<LayoutProps> = ({ content, sectionRefs }) => (
  <div
    ref={(el) => {
      if (sectionRefs.current) {
        sectionRefs.current[content.id] = el;
      }
    }}
    className="mb-20"
  >
    <div className="max-w-3xl">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          Section {content.id}
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
      <p className="text-xl text-gray-600 mb-8">{content.description}</p>
      <div className="prose prose-lg text-gray-700 leading-relaxed mb-12">
        {content.content}
      </div>
    </div>
  </div>
);

export default RegularLayout;
