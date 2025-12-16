import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Build Something Amazing</h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                            We are ready to take on your project. Whether it's a complex web application, a hardware prototype, or an AI model, we have the skills to deliver.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/10">
                                <Mail className="w-6 h-6" />
                                <div>
                                    <p className="text-sm font-medium opacity-70">Email Us At</p>
                                    <a href="mailto:arcarnupab@gmail.com" className="text-lg font-semibold hover:underline">arcarnupab@gmail.com</a>
                                    <br />
                                    <a href="mailto:jj.java1st@gmail.com" className="text-lg font-semibold hover:underline">jj.java1st@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-primary-foreground/70 pt-4">
                                <MapPin size={18} /> Nonthaburi, Thailand
                            </div>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-2xl p-8"
                    >
                        <h3 className="text-white text-xl font-bold mb-6">Send a Message</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Name</label>
                                    <input type="text" className="w-full h-10 px-3 rounded-md border border-input bg-transparent text-white ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email</label>
                                    <input type="email" className="w-full h-10 px-3 rounded-md border border-input bg-transparent text-white ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Message</label>
                                <textarea className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-transparent text-white ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button className="w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
