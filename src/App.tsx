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
            "During induction, you'll hear many new terms. Let's slow it down.\n\n**Grading & Exams**\n\nYour performance is measured using CGPA. Marks come from:\n• Internal assessments (tests, assignments, labs)\n• Attendance\n• End semester exams (KTU exams)\n• Consistency matters more than last-minute study\n\n**Attendance**\n\nAttendance is important and monitored. Missing too many classes can cause problems later. You need a minimum of 75% to be able to write the exams. For most subjects, you need only 85% to get full 5 marks for attendance.\n\nPro tip: Don't ignore attendance, thinking \"I'll manage later\"\n\n**Labs & Assignments**\n\nLabs are as important as theory. Assignments help you stay regular — don't treat them lightly.",
        },
        {
          id: "1.3",
          title: "Induction Programs",
          content:
            "Induction programs try to explain everything at once:\n• Academic rules\n• College culture\n• Clubs\n• Opportunities\n\nIt's totally normal if you don't remember everything, or feel lost and as if things are rushed.\n\nThat's exactly why MEC Fresher Compass exists — you can come back and read things at your own pace.",
        },
        {
          id: "1.4",
          title: "Grade System",
          content:
            "KTU follows a 10-point grading system, not direct marks. Your performance in each subject is converted into a letter grade, which then maps to grade points. \n\n**📊 KTU Grade → Points → Meaning (Point Format)**\n• 90 – 100% → S → 10 points → Outstanding 🌟\n• 85 – 89% → A+ → 9 points → Excellent \n• 80 – 84% → A → 8.5 points → Very Good \n• 75 – 79% → B+ → 8 points → Good\n• 70 – 74% → B → 7.5 points → Above Average\n• 65 – 69% → C+ → 7 points → Average \n• 60 – 64% → C → 6.5 points → Satisfactory\n• 55 – 59% → D → 6 points → Pass\n• 50 – 54% → P → 5 points → Bare Pass\n• Below 50% → F → 0 points → Fail ❌\n\n**🧮 SGPA – Semester Grade Point Average**\n This tells how well you did in one semester.\n ☆ Formula: SGPA = Σ (Credit × Grade Point) ÷ Σ Credits\n So, subjects with more credits affect your SGPA more\n\n**📈CGPA – Cumulative Grade Point Average**\nThis is your overall performance till the current semester.\n ☆ Formula: CGPA = Average of all SGPAs (credit-weighted)\n This is the number companies, higher studies, and abroad applications mostly care about 👀✨ \n\n**🔄 Internal + External = Final Grade**\nEach subject has:\n •Internal Assessment (IA) → usually 40 marks\n •End Semester Exam (ESE) → usually 60 marks \n Both are combined, then converted into the final grade. \n Fail in ESE  leads to fail the subject😬 (minimum of 24 is required for ESE. Yes, no problem for internal, as long as you get the total above 50). \n\n**🧠 Important KTU Reality Checks (very important)**\n•Credits > Marks — focus more on high-credit subjects\n •One low-grade in a big subject hurts more than two small ones\n •CGPA ≥ 7.5 → decent\n •CGPA ≥ 8.0 → strong\n •CGPA ≥ 8.5+ → elite tier 🚀 \n\n**🌱 Our gentle advice**\nDon’t chase S grades everywhere.\n Chase consistency. A steady 8+ CGPA beats random spikes any day — especially for internships, Masters, and placements 💫\n",
        },
        {
          id: "1.5",
          title: "Clubs at MEC",
          content:
            "MEC has many clubs — technical, cultural, sports, and social.\n\n**What You Should Know**\n• You don't need to join everything. But it's always great to try out new things\n• Clubs will come one after another — that's normal\n• Each club focuses on a different domain\n• A lot of clubs only take in 2nd years and above as members. But you can still participate in their events\n\n**Types of Clubs**\n• Technical clubs – coding, electronics, robotics, design, research\n• Cultural clubs – music, dance, drama, arts\n• Sports & fitness\n• Social & outreach clubs",
        },
        {
          id: "1.6",
          title: "Choosing Clubs",
          content:
            "\"Everyone Is Joining Something… What Should I Do?\"\n\nThis pressure is very real.\n\nRemember:\n• College is not a race\n• Joining a club just because others are joining won't help you\n• It's okay to observe first, attend intro sessions, ask seniors questions and then take a decision\n\nBest approach: Pick one thing you are curious about, not what looks popular.",
        },
        {
          id: "1.7",
          title: "Managing the First Few Weeks",
          content:
            "The first few weeks can feel overwhelming. Here's how to navigate them smoothly.",
          cardData: {
            type: "tip",
            cards: [
              {
                title: "✅ Do This",
                description:
                  "Focus on understanding subjects. Make a simple routine. Talk to seniors and classmates. Use tools like reminders and to-do lists",
                color: "green",
              },
              {
                title: "❌ Avoid This",
                description:
                  "Comparing your journey with others. Overloading yourself with clubs immediately. Panicking about CGPA in the first month",
                color: "red",
              },
            ],
          },
        },
        {
          id: "1.8",
          title: "Common Fresher Questions",
          content:
            "**Q: Is first year very important?**\nYes — it sets your foundation and habits.\n\n**Q: Can I survive without joining clubs?**\nYes. Clubs are opportunities, not obligations.\n\n**Q: What if I miss a club registration?**\nHappens to everyone. There will be more chances.\n\n**Q: Is CGPA everything?**\nNo. Skills, consistency, and experience matter a lot.",
        },
        {
          id: "1.9",
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
        "Joining clubs is one of the fastest ways to grow beyond the classroom📈.Clubs are where learning turns into experience, helping you build confidence, leadership, and friendships that last beyond college. They expose you to real responsibilities, teamwork, and challenges that shape both your skills and mindset. By stepping out of your comfort zone, you discover your potential and grow faster than you ever could alone. Join a club not just to add to your resume, but to truly live and shape your college journey. ✨✨",
      subItems: [
        {
          id: "2.1",
          title: "Technical Clubs",
          content:
            "MEC has several active technical clubs that focus on hands-on learning, building projects, and skill development. These clubs are perfect for students who want to go beyond textbooks and create real-world solutions.",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "GDGC MEC",
                description:
                  "Google Developer Groups Club. Focus on web development, app development, cloud & ML. Hackathons, coding sessions, and real projects. Extremely strong for CS & self-learners.",
                icon: "🌐",
                color: "blue",
              },

              {
                title: "TLE Cell",
                description:
                  "Time Limit Exceeded. Focus on DSA, skill enhancement, and academic enrichment which is needed for every basic interview.",
                icon: "🎓",
                color: "blue",
              },
              {
                title: "NSDC @ MEC",
                description:
                  "AI/ML club which focus on skill development initiatives focusing on industry-ready skills and changing market.",
                icon: "💻",
                color: "purple",
              },
            ],
          },
        },
        {
          id: "2.2",
          title: "Professional Societies",
          content:
            "Professional societies provide national and international exposure, research opportunities, and industry connections. These are domain-specific organizations with strong backing from international bodies.",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "IEEE MEC Chapter",
                description:
                  "One of the strongest technical chapters at MEC. Focus on Electronics, Computer Science, AI, Robotics, and Research. Workshops, hackathons, paper presentations, and international exposure. Best for ECE, EE, CS students.",
                icon: "⚙️",
                color: "blue",
              },
              {
                title: "ASME MEC",
                description:
                  "Mechanical-focused technical society. Activities include design challenges, industrial talks, and mechanical projects. Valuable for mechanical engineering students interested in hands-on work.",
                icon: "🔧",
                color: "yellow",
              },
            ],
          },
        },
        {
          id: "2.3",
          title: "Cultural & Non-Tech Clubs",
          content:
            "MEC has a vibrant cultural scene with clubs dedicated to arts, music, dance, and public speaking. These clubs are the backbone of college fests and inter-college competitions.",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "Bharatham",
                description:
                  "Very active cultural teams including Dance (classical, western, group) and Music (vocals, bands, instruments). Core of arts fest and inter-college competitions. If you have talent, MEC gives you a real stage.",
                icon: "🎭",
                color: "pink",
              },
              {
                title: "TEDx MEC",
                description:
                  "Official TEDx event hosted by MEC. Features entrepreneurs, researchers, artists, and MEC alumni as speakers. High-profile event with excellent volunteering experience. Looks very strong on CV and provides serious networking opportunities.",
                icon: "🎤",
                color: "red",
              },
              {
                title: "Sports club",
                description:
                  "Official college sports club featuring many sports. Entirely student-run. Perfect for sports enthusiasts.",
                icon: "⚽️",
                color: "blue",
              },
            ],
          },
        },
        {
          id: "2.4",
          title: "Social & Leadership",
          content:
            "These organizations focus on social service, environmental causes, leadership development, and nation-building. Great for building soft skills and giving back to society.",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "NSS MEC Unit",
                description:
                  "Government-recognized service organization. Activities include community service, blood donation camps, and disaster relief. Provides official certificates helpful for higher studies and government applications. Builds leadership and social responsibility.",
                icon: "🇮🇳",
                color: "green",
              },
              {
                title: "Bhoomitrasena",
                description:
                  "Environmental and sustainability group. Activities include clean-up drives, tree plantation, and awareness programs. More social and eco-focused than technical. Perfect for environmentally conscious students.",
                icon: "🌱",
                color: "green",
              },
              {
                title: "Yi-Yuva (Young Indians)",
                description:
                  "Leadership and entrepreneurship oriented. Focus on nation-building and youth leadership. Good for students interested in management, startups, and public speaking. Part of CII initiative.",
                icon: "💼",
                color: "purple",
              },
            ],
          },
        },
        {
          id: "2.5",
          title: "College Union & Cells",
          content:
            "The College Union is the student government of MEC, handling major events and student representation. Under the Union are several cells that form the critical backbone of college operations.\n\n**MEC College Union handles:**\n• Arts fest & cultural programs\n• Major college events & fests\n• Student representation & issues\n• Coordination with college administration\n\nThe Union oversees several important cells that work behind the scenes to make everything run smoothly.",
          cardData: {
            type: "info",
            cards: [
              {
                title: "Placement Cell",
                description:
                  "Handles company coordination and placement drives. Very serious at MEC. Works throughout the year to bring companies to campus and prepare students for interviews.",
                icon: "💼",
                color: "blue",
              },
              {
                title: "Training Cell",
                description:
                  "Focuses on aptitude training, soft skills development, and coding preparation. Helps students get ready for placement season and competitive exams.",
                icon: "📚",
                color: "purple",
              },
              {
                title: "Alumni Relations Cell",
                description:
                  "Organizes alumni talks, mentorship programs, and networking events. Connects current students with successful MEC alumni for guidance and opportunities.",
                icon: "🤝",
                color: "green",
              },
              {
                title: "Exam Cell",
                description:
                  "Handles exam coordination and communication. Ensures smooth conduct of internal assessments and university exams. Your go-to for exam-related queries.",
                icon: "📝",
                color: "yellow",
              },
            ],
          },
        },
        {
          id: "2.6",
          title: "Other Initiatives",
          content:
            "MEC has additional programs and initiatives that provide skill development, innovation support, and learning opportunities. These might be less visible in daily college life but offer valuable resources.",
          cardData: {
            type: "info",
            cards: [
              {
                title: "TinkerHub MEC",
                description:
                  "Student-led tech learning community focused on learning by building. Coding bootcamps, build nights, hackathons, and peer mentoring. Beginner-friendly and converts theory to real skills.",
                icon: "🛠️",
                color: "purple",
              },
              {
                title: "IdeaLab MEC",
                description:
                  "KTU & Govt-supported innovation lab on campus. Access to 3D printers, electronics kits, mechanical tools, and prototyping equipment. Perfect for mini projects and hardware prototypes.",
                icon: "🧪",
                color: "green",
              },
            ],
          },
        },
        {
          id: "2.7",
          title: "The MEC Advantage",
          content:
            "**TinkerHub × IdeaLab: The Perfect Combination**\n\nThis is very MEC-specific and important. The combination of TinkerHub and IdeaLab creates a unique ecosystem:\n\n**TinkerHub provides:**\n• Skills and mindset\n• Learning community\n• Mentorship and guidance\n• Bootcamps and workshops\n\n**IdeaLab provides:**\n• Physical tools and equipment\n• Dedicated build space\n• Prototyping facilities\n• Hardware resources\n\nMany of MEC's best projects start in TinkerHub (where you learn and ideate) and get built in IdeaLab (where you have access to tools and space).\n\nThis combination is what makes MEC special — you don't just learn theory, you build real things with real tools, supported by a community of peers and mentors.",
        },
      ],
    },
    {
      id: "3",
      title: "Resources",
      description: "An Archieve for MECians",
      content: "Text,Notes and PYQs",
      subItems: [
        {
          id: "3.1",
          title: "Textbooks",
          content: "Various Textbooks links",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "Sem 1",
                description: "Contains ATP,BEE,Chemistry,Physics,Maths",
                color: "blue",
                link: "https://drive.google.com/drive/folders/1vKW5vhEryHuWwAqL51GMsQjIiLo1b2H6?usp=sharing",
              },
              {
                title: "Sem 2",
                description: "Still in progress",
                color: "purple",
              },
            ],
          },
        },
        {
          id: "3.2",
          title: "Notes",
          content: "Various Notes links",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "Sem 1",
                description: "Will be updated soon",
                color: "blue",
              },
              {
                title: "Sem 2",
                description: "Still in progress",
                color: "purple",
              },
            ],
          },
        },
        {
          id: "3.3",
          title: "PYQ",
          content: "Various PYQ links",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "Sem 1",
                description: "Some Paper's I got",
                color: "blue",
                link: "https://drive.google.com/drive/folders/1l3h7-IXFfEavJW3Ej3ODV-TjfX5RBetB?usp=share_link",
              },
              {
                title: "Sem 2",
                description: "Still in Progress",
                color: "purple",
              },
            ],
          },
        },
        {
          id: "3.4",
          title: "Others",
          content: "Various Courses links",
          cardData: {
            type: "feature",
            cards: [
              {
                title: "MOOC 101",
                description:
                  "Contains notes for 25 hours of online MOOC course 101",
                color: "blue",
                link: "https://drive.google.com/drive/folders/1GTi1U210BG2YWCfCzULdZTADRQp5B6O_?usp=share_link",
              },
              {
                title: "Any other courses coming",
                description: "Currently unknown",
                color: "purple",
              },
            ],
          },
        },
      ],
    },
    {
      id: "4",
      title: "Making the Most of College",
      description: "Say Yes First, Figure It Out Later",
      content: "Not used",
    },
    {
      id: "5",
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
