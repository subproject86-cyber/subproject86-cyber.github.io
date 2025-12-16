import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data/resumes';
import { ArrowUpRight, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-card border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex-1 overflow-y-auto">
                    <div className="aspect-video relative w-full bg-muted">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-xl">
                            Highlights of our best work in Web, Mobile, and IoT.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profileData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden border bg-card hover:shadow-xl transition-all cursor-pointer"
                        >
                            <div className="aspect-video relative overflow-hidden bg-muted">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 bg-black/50 text-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm font-medium text-sm">
                                        View Details
                                    </span>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
