
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "HOW DO YOU SELECT ARTISANS?",
        answer: "Our curation team carefully vets each artisan based on craftsmanship, quality of materials, and authenticity of their technique. We prioritize unique stories and traditional skills passed down through generations."
    },
    {
        question: "WHEN WILL YOU LAUNCH?",
        answer: "We are targeting a soft launch in Q1 2026 with our first cohort of 50 artisans. Sign up for our waitlist to get notified and receive early access."
    },
    {
        question: "HOW DOES SHIPPING WORK?",
        answer: "We provide end-to-end logistics support for our artisans. When you place an order, it is carefully packaged by the maker and shipped directly to you through our trusted courier partners, ensuring it arrives safely and efficiently."
    },
    {
        question: "HOW DO I JOIN AS A CUSTOMER OR ARTIST?",
        answer: "To join as a customer, simply sign up for the waitlist on our homepage. To join as an artisan, please fill out the application form in the 'Join as an Artist' section. Our team will review your application and get in touch."
    },
    {
        question: "HOW DO I JOIN AS A CUSTOMER OR ARTIST?",
        answer: "To join as a customer, simply sign up for the waitlist on our homepage. To join as an artisan, please fill out the application form in the 'Join as an Artist' section. Our team will review your application and get in touch."
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