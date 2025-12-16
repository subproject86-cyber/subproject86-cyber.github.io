import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Brain } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                            Full Stack • IoT • AI Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Future of Tech</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                            We are a unified collective combining high-performance Web Development, Smart IoT Systems, and Artificial Intelligence to build products that matter.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                                Hire Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a href="#projects" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                                Our Work
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4 translate-y-8">
                            <div className="p-6 rounded-2xl bg-card border shadow-lg">
                                <Code2 className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-bold text-lg">Web Excellence</h3>
                                <p className="text-sm text-muted-foreground">React, Node.js, Modern UI/UX</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-lg">
                                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                <p className="text-sm font-medium">Years of Combined Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-card border shadow-lg">
                                <Cpu className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="font-bold text-lg">Hardware Control</h3>
                                <p className="text-sm text-muted-foreground">IoT, Robotics, Sensors</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border shadow-lg">
                                <Brain className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="font-bold text-lg">Intelligent Systems</h3>
                                <p className="text-sm text-muted-foreground">AI, Machine Learning, Data</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
