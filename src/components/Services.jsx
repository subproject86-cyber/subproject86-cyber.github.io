import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/resumes';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Our Expertise</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We bring together a diverse set of skills to solve complex problems, from hardware to software.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {profileData.services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl border bg-card hover:bg-accent/50 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
