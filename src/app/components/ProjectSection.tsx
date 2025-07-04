"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Amazon-Clone",
    description: "HTML, CSS",
    image: "/images/Project/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mehakanis/Amazon-Clone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description: "HTML, CSS, Typescript",
    image: "/images/Project/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mehakanis/Tic-Tac-Toe.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Next.js, tailwindCSS",
    image: "/images/Project/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "45-Assignments",
    description: "Typescript",
    image: "/images/Project/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mehakanis/assignment.mehak.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personal Resume",
    description: "HTML,CSS,Typescript",
    image: "/images/Project/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Birthday wish App",
    description: "Nextjs",
    image: "/images/Project/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Responsive E-Commerce Application",
    description: "Next.js, tailwindCSS, Typescript",
    image: "/images/Project/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mehakanis/Hackathon3.git",
    previewUrl: "https://hackathon3-peach.vercel.app/product/vase-set"
  },

{
    id: 8,
    title: "Secure Data Encryption System",
    description: "Python, Streamlit",
    image: "/images/Project/8.png",
    tag: ["All", "obile"],
    gitUrl: "https://github.com/Mehakanis/Secure_Data_Encryption_system.git",
    previewUrl: "https://secure-data-encryption-sys.streamlit.app"
  },
  {
    id: 9,
    title: "Pasword Strength Meter",
    description: "Python, Streamlit",
    image: "/images/Project/9.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Mehakanis/password-strength-meter.git",
    previewUrl: "https://password-strength-meter373.streamlit.app"

  },
  {
    id: 10,
    title: "Unit Converter",
    description: "Python, Streamlit",
    image: "/images/Project/10.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Mehakanis/unit_converter",
    previewUrl: "https://converterpy-afxtprdwuu3hhry7ftntvz.streamlit.app"
  }
];
const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
