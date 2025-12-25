import type { LayoutProps } from "../../types/user.interface";

const TimelineLayout: React.FC<LayoutProps> = ({ content, sectionRefs }) => (
  <div
    ref={(el) => {
      if (sectionRefs.current) {
        sectionRefs.current[content.id] = el;
      }
    }}
    className="mb-20 "
  >
    <div className="max-w-4xl">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-50 rounded-full mb-4">
          📋 Best Practices
        </span>
        <h2 className="text-4xl font-bold text-gray-900">{content.title}</h2>
      </div>

      <div className="relative pl-8 border-l-4 border-orange-400">
        <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12 pb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Step 1: Plan
          </h3>
          <p className="text-gray-700 leading-relaxed">{content.description}</p>
        </div>

        <div className="absolute -left-3 top-32 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12 pb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Step 2: Execute
          </h3>
          <p className="text-gray-700 leading-relaxed">{content.content}</p>
        </div>

        <div className="absolute -left-3 bottom-8 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Step 3: Review
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Analyze results and iterate on your approach.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TimelineLayout;
