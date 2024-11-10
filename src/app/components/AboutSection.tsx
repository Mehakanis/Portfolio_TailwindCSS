"use client";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";
import Image from "next/image";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className=" list-disc pl-2">
        <li>Cloud Applied Generative AI Engineer</li>
      </ul>
    ),
  },
  {
    title: "Certificate",
    id: "certificate",
    content: (
      <ul className=" list-disc pl-2">
        <li>Freelancing Certificate from DigiSkills</li>
        <li>Search Engine Optimization Certificate from DigiSkills</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 " id= "about">
      <div className=" mt-2 md:mt-0 text-left flex flex-col h-full ">
        <Image
          src="/images/About1.jpg"
          alt=""
          width={400}
          height={300}
          className="h-[450px] w-full border-solid border-2 border-black"
        />
      </div>
      <div>
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text  mb-4   ">About Me</h2>
        <p className="text-base lg:text-lg  ">
          I am Mehak Anis, a passionate Full-Stack Web Developer with a solid
          background in both frontend and backend technologies. My journey in
          web development has equipped me with skills in HTML5, CSS3,
          TypeScript, Tailwind CSS, React.js, and Next.js. I am dedicated to
          creating efficient and user-friendly web applications, and I
          continuously seek opportunities to enhance my knowledge in emerging
          fields like Generative AI and Cloud Computing. My commitment to
          excellence drives me to deliver high-quality solutions and stay ahead
          in a constantly evolving tech landscape.
        </p>
        <div className="flex flex-row mt-8 gap-2">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certificate")}
            active={tab === "certificate"}
          >
            {" "}
            Certification{" "}
          </TabButton>
        </div>
        <div className="mt-8">
          {tabData.find((t) => t.id === tab)?.content || "No content found"}
        </div>
      </div>
    </section>
  );
}
