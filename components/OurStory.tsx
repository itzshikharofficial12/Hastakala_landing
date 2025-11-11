import React from 'react';

const StoryStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-brown text-white rounded-full flex items-center justify-center font-bold font-sans">{number}</div>
        <div>
            <h4 className="font-serif font-bold text-gray-800">{title}</h4>
            <p className="text-gray-600 text-sm">{children}</p>
        </div>
    </div>
);

const OurStory: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-brand-brown/20 aspect-video rounded-lg flex items-center justify-center text-gray-600 font-semibold font-sans">
                        Founder Interview Video
                    </div>
                    <div>
                        <h2 className="text-4xl font-serif font-bold mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Hastakala Crafts began when our founder witnessed artisans losing margin to multiple middlemen. What started as a simple idea—connecting makers directly with customers—has grown into a mission to preserve traditional crafts while ensuring fair compensation for artisans.
                        </p>
                        <blockquote className="bg-brand-gray/50 border-l-4 border-brand-brown p-6 mb-8">
                            <p className="text-lg italic text-gray-700">"We built Hastakala Crafts to make every handcrafted story find its rightful buyer."</p>
                            <footer className="mt-2 text-sm text-gray-600">— Shaurya Mittal, Founder</footer>
                        </blockquote>
                        <div className="space-y-6">
                            <StoryStep number={1} title="THE PROBLEM">
                                Artisans were losing 40-60% of their product value to middlemen and intermediaries.
                            </StoryStep>
                            <StoryStep number={2} title="OUR APPROACH">
                                Direct marketplace with transparent pricing, storytelling, and logistics support for artisans.
                            </StoryStep>
                            <StoryStep number={3} title="LAUNCH PLAN">
                                Q1 2026 soft launch with 50 curated artisans, scaling to 500+ makers by year end.
                            </StoryStep>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;