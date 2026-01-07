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
      title: "MEC Fresher Compass",
      description: "A beginner's guide to life at MEC",
      content:
        "Welcome to Model Engineering College If you’re feeling excited, confused, nervous, or all of it together — don’t worry. Every MECian has been there. This guide exists to help you understand college life at MEC, without overwhelming you.",
      subItems: [
        {
          id: "1.1",
          title: "What Is MEC All About?",
          content:
            "MEC is known for:\n• Strong academics\n• Great campus placements\n• Very strong alumni network\n• An active and competitive club culture\n• Students who balance studies, tech, culture, and fun\n• Healthy senior-junior bond\n\nCollege life here is not just about classes and exams. It's about:\n• Exploring your interests\n• Learning beyond textbooks\n• Finding people who think like you\n• Slowly figuring out who you want to become\n\nDon't worry. You are not expected to know everything from day one.",
        },
        {
          id: "1.2",
          title: "The Academic System",
          content:
            "During induction, you'll hear many new terms. Let's slow it down.\n\n**Grading & Exams**\n\nYour performance is measured using CGPA. Marks come from:\n• Internal assessments (tests, assignments, labs)\n• Attendance\n• End semester exams (KTU exams)\n• Consistency matters more than last-minute study\n\n**Attendance**\n\nAttendance is important and monitored. Missing too many classes can cause problems later. You need a minimum of 75% to be able to write the exams. For most subjects, you need only 85% to get full 5 marks for attendance.\n\nPro tip: Don't ignore attendance thinking \"I'll manage later\"\n\n**Labs & Assignments**\n\nLabs are as important as theory. Assignments help you stay regular — don't treat them lightly.",
        },
        {
          id: "1.3",
          title: "Induction Programs",
          content:
            "Induction programs try to explain everything at once:\n• Academic rules\n• College culture\n• Clubs\n• Opportunities\n\nIt's totally normal if you don't remember everything, or feel lost and as if things are rushed.\n\nThat's exactly why MEC Fresher Compass exists — you can come back and read things at your own pace.",
        },
        {
          id: "1.4",
          title: "Clubs at MEC",
          content:
            "MEC has many clubs — technical, cultural, sports, and social.\n\n**What You Should Know**\n• You don't need to join everything. But it's always great to try out new things\n• Clubs will come one after another — that's normal\n• Each club focuses on a different domain\n• A lot of clubs only take in 2nd years and above as members. But you can still participate in their events\n\n**Types of Clubs**\n• Technical clubs – coding, electronics, robotics, design, research\n• Cultural clubs – music, dance, drama, arts\n• Sports & fitness\n• Social & outreach clubs",
        },
        {
          id: "1.5",
          title: "Choosing Clubs",
          content:
            "\"Everyone Is Joining Something… What Should I Do?\"\n\nThis pressure is very real.\n\nRemember:\n• College is not a race\n• Joining a club just because others are joining won't help you\n• It's okay to observe first, attend intro sessions, ask seniors questions and then take a decision\n\nBest approach: Pick one thing you are curious about, not what looks popular.",
        },
        {
          id: "1.6",
          title: "Managing the First Few Weeks",
          content:
            "**Do This**\n• Focus on understanding subjects\n• Make a simple routine\n• Talk to seniors and classmates\n• Use tools like reminders and to-do lists\n\n**Avoid**\n• Comparing your journey with others\n• Overloading yourself with clubs immediately\n• Panicking about CGPA in the first month\n\nCollege is a marathon, not a sprint 🏃‍♂️",
        },
        {
          id: "1.7",
          title: "Common Fresher Questions",
          content:
            "**Q: Is first year very important?**\nYes — it sets your foundation and habits.\n\n**Q: Can I survive without joining clubs?**\nYes. Clubs are opportunities, not obligations.\n\n**Q: What if I miss a club registration?**\nHappens to everyone. There will be more chances.\n\n**Q: Is CGPA everything?**\nNo. Skills, consistency, and experience matter a lot.",
        },
        {
          id: "1.8",
          title: "Word of Advice",
          content:
            "All of this can be a lot to take in at first. But don't worry.\n\nYou don't have to figure everything out today.\n\nYou don't have to be perfect.\n\nYou just have to start.\n\nMEC Fresher Compass is here to guide you — step by step, without pressure.\n\nWelcome to MEC 🎓\n\nYour journey starts here.",
        },
      ],
    },
    {
      id: "2",
      title: "Clubs",
      description: "Exploring different clubs",
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
      title: "Making the Most of College",
      description: "Say Yes First, Figure It Out Later",
      content:
        "College isn’t meant to be “optimized” like a productivity app—it’s meant to be lived. The best students aren’t the ones who did everything perfectly; they’re the ones who tried widely, reflected deeply, and chose consciously.",
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
      title: "HELP!!",
      description: "Troubleshooting",
      content:
        "Encountering problems? Ask for help with your friends and if you want, with your seniors. We are always happy to help",
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
