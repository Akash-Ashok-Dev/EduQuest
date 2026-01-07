import type { LayoutProps } from "../../types/user.interface";

const CardViewLayout: React.FC<LayoutProps> = ({ content, sectionRefs }) => (
  <div
    ref={(el) => {
      if (sectionRefs.current) {
        sectionRefs.current[content.id] = el;
      }
    }}
    className="mb-20"
  >
    <div className="mb-4">
      <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
        Section {content.id}
      </span>
    </div>
    <div className="max-w-5xl">
      <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white p-12 rounded-2xl shadow-2xl mb-8">
        <div className="flex items-center gap-4 mb-6">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2v4 M12 18v4M2 12h4M18 12h4"
            />
          </svg>
          <div>
            <span className="inline-block px-3 py-1 text-sm font-mediu bg-linear-to-r from-blue-300 to-fuchsia-400 bg-opacity-20 rounded-full mb-2">
              ⚡ Features
            </span>
            <h2 className="text-5xl font-black">{content.title}</h2>
          </div>
        </div>
        <p className="text-2xl font-light text-purple-100">
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-400 transition">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4 4-4M16 8l4 4-4 4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Clubs</h3>
          <p className="text-gray-600">
            Lightning-fast load times and smooth interactions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-pink-200 hover:border-pink-400 transition">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Non-Tech clubs
          </h3>
          <p className="text-gray-600">
            Tailor every aspect to fit your needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Professional societies
          </h3>
          <p className="text-gray-600">
            Work together seamlessly with your team.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 hover:border-green-400 transition">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d=" M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z "
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
          <p className="text-gray-600">
            Enterprise-grade security for your data.
          </p>
        </div>
      </div>

      <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          {content.content}
        </p>
      </div>
    </div>
  </div>
);

export default CardViewLayout;
