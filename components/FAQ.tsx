
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "HOW DO YOU SELECT ARTISANS?",
        answer: "Every artist is handpicked through a clear but thoughtful process. We look for authenticity, mastery, and a meaningful story—not just a product. Techniques, materials, and processes are reviewed to ensure high quality and ethical craftsmanship before joining Hastakala."
    },
    {
        question: "WHEN WILL YOU LAUNCH?",
        answer: "We’re preparing for a soft launch in Q1 2026, starting with a carefully curated group of ~50 artisans. This helps us perfect the experience before scaling to 500+ creators by the end of the year. For early access, simply join our waitlist."
    },
    {
        question: "HOW DOES SHIPPING WORK?",
        answer: "We manage logistics so artisans can focus on creation. Items are shipped directly from the artisan’s studio through trusted partners, with full tracking and eco-conscious packaging whenever possible."
    },
    {
        question: "HOW DO I JOIN AS A CUSTOMER OR ARTIST?",
        answer: "We welcome both artisans and craft lovers to our community. For artisans: Apply through our Join as an Artist page. Early artists enjoy zero listing fees and hands-on onboarding. For customers: Join our early-access list and be the first to explore unique crafts and meet their creators."
    }
];

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className={`border-b border-white/20 ${isOpen ? 'border-l-2 border-r-2 border-t-2 border-brand-brown' : 'hover:border-l hover:border-r hover:border-t hover:border-brand-brown/50'}`}>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-4 px-4 transition-all duration-200"
            >
                <span className="font-serif font-bold text-gray-900">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-4 pb-4 text-gray-800 border-t border-white/20 mt-2 pt-4">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('Assets/FAQs.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%'
                }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/25 z-0"></div>
            
            <div className="relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
                        <div className="space-y-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    item={item}
                                    isOpen={openIndex === index}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;