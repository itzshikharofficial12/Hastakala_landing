import React from 'react';

const StoryStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-brown text-white rounded-full flex items-center justify-center font-bold font-sans">{number}</div>
        <div>
            <h4 className="font-serif font-bold text-white">{title}</h4>
            <p className="text-white/80 text-sm">{children}</p>
        </div>
    </div>
);

const OurStory: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('Assests/Our Story.png')",
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-white/90 backdrop-blur-sm aspect-video rounded-lg flex items-center justify-center text-gray-600 font-semibold font-sans shadow-xl border border-white/20">
                            Founder Interview Video
                        </div>
                        <div className="text-white">
                        <h2 className="text-4xl font-serif font-bold mb-4">Our Story</h2>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            Hastakala began with a simple realisation:
                            India’s artisans create treasures, yet often earn the least.
                            For decades, their craft passed through layers of middlemen while their names, identities, and stories were forgotten.
                            We set out to rebuild that balance.
                        </p>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            What started as a small idea—to connect makers directly with conscious buyers—has grown into a movement to restore dignity to handmade work. Today, Hastakala stands for fair trade, cultural preservation, and a digital bridge linking India’s timeless craft to a world eager to experience it.
                        </p>
                        
                        <blockquote className="bg-white/10 backdrop-blur-sm border-l-4 border-brand-brown p-6 mb-8">
                            <p className="text-lg italic text-white">"We built Hastakala so no artisan’s story gets lost in the noise of mass production"</p>
                            <footer className="mt-2 text-sm text-white/80">— Shaurya Mittal, Founder</footer>
                        </blockquote>
                        <div className="space-y-6">
                            <StoryStep number={1} title="THE PROBLEM">
                                Artisans were losing 40–60% of their income to intermediaries.
                                Their craft was celebrated, but their identities were erased.
                            </StoryStep>
                            <StoryStep number={2} title="OUR APPROACH">
                                A direct marketplace built on:
                                <ul className="list-disc list-inside">
                                    <li>Authentic storytelling</li>
                                    <li>Fair, transparent pricing</li>
                                    <li>Tech-enabled logistics</li>
                                </ul>
                                All designed to return power—and profits—to the creators.
                            </StoryStep>
                            <StoryStep number={3} title="LAUNCH PLAN">
                                We’re launching in Q1 2026 with 50 handpicked artisans.
                                Our vision: empower 500+ makers by year-end and build the go-to home for India’s next generation of creative entrepreneurs.
                            </StoryStep>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default OurStory;