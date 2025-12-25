import React from "react";

const Intro: React.FC = () => {
  return (
    <section className="bg-linear-to-br from-blue-600 to bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <h1 className="text-6xl font-bold mb-6"> Greetings</h1>
        <p className="text-2xl mb-8 text-blue-100">
          Everything you need to know to get started and master our platform
        </p>
        <p className="text-lg text-blue-50 max-w-3xl leading-relaxed">
          This comprehensive guide will walk you through all aspects of our
          platform, from basic setup to advanced features. Whether you're a
          beginner or an experienced user, you'll find valuable information
          organized in an easy-to-navigate format. Scroll down to explore our
          documentation sections.
        </p>
        <div className="mt-12 flex gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
