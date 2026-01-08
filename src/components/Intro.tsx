import React from "react";

const Intro: React.FC = () => {
  const LearnMoreOnClick = () => {
    window.open("https://www.mec.ac.in", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-linear-to-br from-blue-600 to bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <h1 className="text-6xl font-bold mb-6"> MECians EduQuest</h1>
        <p className="text-2xl mb-8 text-blue-100">
          Finding your way at MEC just got easier.
        </p>
        <p className="text-lg text-blue-50 max-w-3xl leading-relaxed">
          "No more hunting through endless links and confusing folders. EduQuest
          brings order to the chaos by centralizing everything an MECian needs.
          From organized study materials to navigating college life, we provide
          the accessibility you need to hit the ground running from day one."
        </p>
        <div className="mt-12 flex gap-4">
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            onClick={() => LearnMoreOnClick()}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
