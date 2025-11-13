
import React from 'react';
import { CuratedIcon, FairPayIcon, SustainableIcon } from './icons';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white/90 p-8 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm text-center hover:bg-white transition-all duration-300">
        <div className="w-16 h-16 mx-auto bg-brand-brown/10 text-brand-brown rounded-full flex items-center justify-center mb-6">
            <div className="w-8 h-8">{icon}</div>
        </div>
        <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-dark/80 text-sm leading-relaxed">{description}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden" id="about-us">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('Assests/Why Hastakala.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%'
                }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            
            <div className="relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-4 text-white">What is Hastakala Crafts?</h2>
                        <p className="text-lg text-white/90 leading-relaxed">
                        A movement celebrating India’s makers.<br></br>
                        Hastakala connects artisans to the world through honest trade, transparent storytelling, and design rooted in heritage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<FairPayIcon />}
                        title="Curated"
                        description="India’s finest hands. Thoughtful, soulful, and handpicked—never mass-made."
                    />
                    <FeatureCard
                        icon={<CuratedIcon />}
                        title="Fair Pay"
                        description="Artisans earn what they truly deserve. No middlemen. No exploitation. Only dignity for skill."
                    />
                    <FeatureCard
                        icon={<SustainableIcon />}
                        title="Sustainable"
                        description="Crafted with conscience—embracing tradition while choosing materials that nurture tomorrow."
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
