import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/resumes';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVuejs, FaJava,
    FaPython, FaRaspberryPi, FaDocker, FaFigma
} from "react-icons/fa";
import {
    SiTailwindcss, SiMysql, SiMongodb, SiFlutter, SiAndroidstudio,
    SiAdobexd, SiRoboflow, SiTensorflow, SiOpencv, SiStreamlit,
    SiArduino, SiCplusplus, SiNodered, SiOdoo, SiTypescript, SiMui, SiDjango, SiPytorch
} from "react-icons/si";

// Icon Mapping
const iconMap = {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVuejs, FaJava,
    FaPython, FaRaspberryPi, FaDocker, FaFigma,
    SiTailwindcss, SiMysql, SiMongodb, SiFlutter, SiAndroidstudio,
    SiAdobexd, SiRoboflow, SiTensorflow, SiOpencv, SiStreamlit,
    SiArduino, SiCplusplus, SiNodered, SiOdoo, SiTypescript,
    SiMUI: SiMui,
    FaDjango: SiDjango,
    SiPytorch
};

const SkillCard = ({ skill, index }) => {
    const IconComponent = iconMap[skill.icon] || FaReact;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
            <div className="p-4 rounded-full bg-background border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <IconComponent />
                </div>
            </div>
            <h4 className="font-bold text-sm text-center group-hover:text-primary transition-colors">{skill.name}</h4>
        </motion.div>
    );
};

const SkillCategory = ({ title, skills }) => (
    <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 px-2 border-l-4 border-primary">
            {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} index={idx} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Proficiency</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Expertise across the full technology stack, from high-level web interfaces to low-level hardware control.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <SkillCategory title="Web Development" skills={profileData.skills.web} />
                    <SkillCategory title="Application Development" skills={profileData.skills.application} />
                    <SkillCategory title="Artificial Intelligence" skills={profileData.skills.ai} />
                    <SkillCategory title="IoT & Hardware" skills={profileData.skills.iot} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
