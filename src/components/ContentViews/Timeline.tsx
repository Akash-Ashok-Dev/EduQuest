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
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          Section {content.id}
        </span>
      </div>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">{content.title}</h2>
        <span className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-50 rounded-full mb-4">
          Say yes to experiences before you say no out of fear
        </span>
      </div>

      <div className="relative pl-8 border-l-4 border-orange-400">
        <div className="absolute -left-3.5 top-0 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Try many identities, not just one
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Join a club even if you feel underqualified. Volunteer even if
            you’re unsure. Attend a talk outside your branch. College is the
            only safe sandbox where experimenting with who you are has almost
            zero long-term risk.
          </p>
        </div>

        <div className="absolute -left-3.5 top-41 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Build people, not just a resume
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Late-night conversations, hostel chaos, group projects that almost
            fail—these teach you emotional intelligence faster than any course.
            Your network, friendships, and even disagreements will shape you
            more than grades ever will.
          </p>
        </div>

        <div className="absolute -left-3.5 bottom-53 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Do uncomfortable things early
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Public speaking, leadership roles, hackathons, competitions—being
            bad at something publicly is painful, yes, but it’s also a
            superpower. Discomfort is a signal that you’re growing.
          </p>
        </div>

        <div className="absolute -left-3.5 bottom-14 w-6 h-6 bg-orange-400 rounded-full"></div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Reflect regularly
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Every semester, ask yourself:
          </p>
          <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-500 bg-emerald-50 rounded-full">
            What did I try? What energized me? What drained me? This turns chaos
            into clarity.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default TimelineLayout;
