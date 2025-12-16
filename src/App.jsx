import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            {/* Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-4' : 'bg-transparent py-6'}`}>
                <div className="container px-4 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter">
                        YourSkill
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
                        <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">Work</button>
                        <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">About</button>
                        <button onClick={() => scrollToSection('contact')} className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                            Contact Us
                        </button>
                    </nav>

                    <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-4 md:hidden">
                    <div className="flex flex-col gap-6 text-2xl font-semibold">
                        <button onClick={() => scrollToSection('services')} className="text-left py-2 border-b">Services</button>
                        <button onClick={() => scrollToSection('projects')} className="text-left py-2 border-b">Work</button>
                        <button onClick={() => scrollToSection('about')} className="text-left py-2 border-b">About</button>
                        <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-primary">Contact Us</button>
                    </div>
                </div>
            )}

            <main>
                <Hero />
                <Services />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t">
                <p>© 2024 YourSkill. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
