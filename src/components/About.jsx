import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Phone } from 'lucide-react';
import profile1 from '../assets/Profile/1.jpg';
import profile2 from '../assets/Profile/2.jpg';

const About = () => {
    const team = [
        {
            name: "Nattaphat Jangponak",
            image: profile1,
            education: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
            phone: "+6694-550-9631"
        },
        {
            name: "Anuphab Khanchok",
            image: profile2,
            education: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
            phone: "+6696-689-4337"
        }
    ];

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />

            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the team behind high-quality solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative bg-card/50 backdrop-blur-sm border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="aspect-[3/4] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    style={{ objectPosition: '50% 20%' }}
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <h3 className="text-3xl font-bold mb-2 text-white">{member.name}</h3>
                                    <div className="w-12 h-1 bg-primary rounded-full mb-4" />

                                    <div className="space-y-3 text-white/90">
                                        <div className="flex items-start gap-3">
                                            <GraduationCap className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                            <span className="text-sm font-medium">{member.education}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 shrink-0 text-primary" />
                                            <span className="text-sm font-medium">{member.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
