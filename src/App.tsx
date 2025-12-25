import React, { useRef } from "react";
import type { ContentItem } from "./types/user.interface";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Intro from "./components/Intro";
import Ending from "./components/Ending";

const App: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: "1",
      title: "Introduction",
      description: "Getting started with our platform",
      content:
        "Welcome to our comprehensive guide. This section provides an overview of what you can expect and how to navigate through the various topics. Our platform is designed to help you understand complex concepts through clear, structured content.",
      subItems: [
        {
          id: "1-1",
          title: "What is This Platform?",
          content:
            "Our platform is a comprehensive solution designed to streamline your workflow and increase productivity. Built with modern technologies and best practices, it offers a robust set of features that cater to both beginners and advanced users.",
        },
        {
          id: "1-2",
          title: "Key Benefits",
          content:
            "The platform offers numerous benefits including improved efficiency, better organization, seamless collaboration, and extensive customization options. Users report saving up to 40% of their time on routine tasks.",
        },
        {
          id: "1-3",
          title: "System Requirements",
          content:
            "To use our platform, you need a modern web browser (Chrome, Firefox, Safari, or Edge), a stable internet connection, and at least 4GB of RAM. Mobile devices running iOS 12+ or Android 8+ are also supported.",
        },
      ],
    },
    {
      id: "2",
      title: "Features",
      description: "Explore key capabilities",
      content:
        "Our platform offers a wide range of features including real-time collaboration, advanced analytics, customizable workflows, and seamless integrations. Each feature is designed with user experience in mind.",
      subItems: [
        {
          id: "2-1",
          title: "Real-time Collaboration",
          content:
            "Work together with your team in real-time. See changes as they happen, communicate through integrated chat, and maintain version history for all your work.",
        },
        {
          id: "2-2",
          title: "Advanced Analytics",
          content:
            "Gain insights into your data with powerful analytics tools. Create custom dashboards, generate reports, and track key performance indicators with ease.",
        },
      ],
    },
    {
      id: "3",
      title: "Getting Started",
      description: "Quick start guide",
      content:
        "Begin your journey by setting up your account and configuring your preferences. This section walks you through the initial setup process, from creating your profile to customizing your dashboard.",
    },
    {
      id: "4",
      title: "Best Practices",
      description: "Tips for optimal use",
      content:
        "Learn industry best practices and expert tips to maximize your productivity. This section covers workflow optimization, security recommendations, and strategies for team collaboration.",
      subItems: [
        {
          id: "4-1",
          title: "Workflow Optimization",
          content:
            "Streamline your processes by setting up custom workflows, using keyboard shortcuts, and automating repetitive tasks. Learn how to organize your workspace for maximum efficiency.",
        },
        {
          id: "4-2",
          title: "Security Guidelines",
          content:
            "Protect your data by following security best practices. Enable two-factor authentication, use strong passwords, regularly review access permissions, and keep your software up to date.",
        },
      ],
    },
    {
      id: "5",
      title: "Advanced Topics",
      description: "Deep dive into complex concepts",
      content:
        "For experienced users, this section delves into advanced features and techniques. Explore API integrations, custom scripting, automation workflows, and performance optimization.",
    },
    {
      id: "6",
      title: "Troubleshooting",
      description: "Common issues and solutions",
      content:
        "Encountering problems? This comprehensive troubleshooting guide addresses the most common issues users face. Find step-by-step solutions, diagnostic tools, and when to contact support.",
    },
  ];

  const [activeId, setActiveId] = useState<string>("1");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["1"]));

  const sectionRefs = useRef<{ [Key: string]: HTMLDivElement | null }>({});

  const handleItemClick = (id: string) => {
    setActiveId(id);

    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }

    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has!(id)) {
        return new Set([id]);
      }
      return newSet;
    });
  };

  const handleScroll = (id: string) => {
    setActiveId(id);

    const parentItem = contentItems.find((item) =>
      item.subItems?.some((sub) => sub.id === id)
    );

    const subItem = contentItems.find((item) =>
      item.subItems?.some((sub) => sub.id !== id)
    );

    if (parentItem || id !== subItem?.id) {
      setExpandedIds(() => new Set(parentItem?.id));
    }
  };

  // const handleToggleExpand = (id: string) => {
  //   return id;
  // };

  return (
    <div className="min h-screen bg-grey-50">
      <Intro />

      <div className="flex">
        <Sidebar
          items={contentItems}
          activeId={activeId}
          expandedIds={expandedIds}
          onItemClick={handleItemClick}
        />
        <Content
          items={contentItems}
          sectionRefs={sectionRefs}
          onScroll={handleScroll}
        />
      </div>
      <Ending />
    </div>
  );
};

export default App;
