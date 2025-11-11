
import React from 'react';
import { CuratedIcon, FairPayIcon, SustainableIcon } from './icons';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200/50 text-center">
        <div className="w-16 h-16 mx-auto bg-brand-brown/10 text-brand-brown rounded-full flex items-center justify-center mb-6">
            <div className="w-8 h-8">{icon}</div>
        </div>
        <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-dark/80 text-sm leading-relaxed">{description}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section className="py-24 bg-brand-gray" id="about-us">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Why Hastakala?</h2>
                    <p className="text-lg text-brand-dark/90 leading-relaxed">
                        We're more than a marketplace. We're a movement to empower artisans, preserve heritage, and connect you with the soul of India's crafts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<FairPayIcon />}
                        title="Direct & Fairly Priced"
                        description="By connecting you directly with artisans, we eliminate middlemen, ensuring they receive the compensation they deserve for their incredible skill and hard work."
                    />
                    <FeatureCard
                        icon={<CuratedIcon />}
                        title="Authentically Curated"
                        description="Every product on our platform is handpicked for its quality, authenticity, and the unique story it tells. Discover genuine crafts you won't find anywhere else."
                    />
                    <FeatureCard
                        icon={<SustainableIcon />}
                        title="Sustainable & Story-Driven"
                        description="We champion sustainable practices and the use of natural materials. Each purchase supports not just an artisan, but a family, a community, and a legacy."
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
