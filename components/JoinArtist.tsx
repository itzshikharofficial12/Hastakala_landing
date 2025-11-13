
import React, { useState, FormEvent } from 'react';

const JoinArtist: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        craft: '',
        portfolio: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you'd send this data to a server.
        console.log('Artist Application:', formData);
        setSubmitted(true);
    };

    return (
        <section id="join-as-artist" className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('Assests/Join as a Artist.png')",
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side: Why join */}
                        <div className="space-y-6 text-black">
                            <h2 className="text-4xl font-serif font-bold">Join as an Artisan Partner</h2>
                            <p className="text-black/90 leading-relaxed">
                            Are you an Indian artisan dedicated to your craft? We want to help you share your story with the world. Join Hastakala to get the platform, support, and fair value you deserve.
                        </p>
                        <ul className="space-y-3 font-normal">
                            <li className="flex items-start">
                                <span className="text-brand-brown font-bold mr-3 mt-1">✓</span>
                                <span><strong>Reach a Global Audience:</strong> Showcase your work to customers who appreciate authentic craftsmanship.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-brown font-bold mr-3 mt-1">✓</span>
                                <span><strong>Fair Pricing & Timely Payments:</strong> We ensure you get a fair price for your products, with transparent and reliable payment cycles.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-brown font-bold mr-3 mt-1">✓</span>
                                <span><strong>Logistics & Storytelling Support:</strong> Focus on your art while we handle shipping, photography, and telling your unique story.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right side: Form */}
                    <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-white/20">
                        {submitted ? (
                             <div className="text-center py-12">
                                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">Thank You!</h3>
                                <p className="text-gray-700">Your application has been received. Our curation team will review it and get in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-center mb-4 text-brand-dark">Apply Now</h3>
                                <div>
                                    <label htmlFor="artist-name" className="sr-only">Full Name</label>
                                    <input type="text" name="name" id="artist-name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-brand-gray/50 border border-transparent rounded-md focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition" />
                                </div>
                                <div>
                                    <label htmlFor="artist-email" className="sr-only">Email Address</label>
                                    <input type="email" name="email" id="artist-email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-brand-gray/50 border border-transparent rounded-md focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition" />
                                </div>
                                <div>
                                    <label htmlFor="artist-number" className="sr-only">Phone Number</label>
                                    <input type="number" name="number" id="artist-number" placeholder="Phone Number" required value={formData.number} onChange={handleChange} className="w-full px-4 py-3 bg-brand-gray/50 border border-transparent rounded-md focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition" />
                                </div>
                                <div>
                                    <label htmlFor="artist-craft" className="sr-only">Your Craft / Artform</label>
                                    <input type="text" name="craft" id="artist-craft" placeholder="e.g., Block Printing, Pottery, Weaving" required value={formData.craft} onChange={handleChange} className="w-full px-4 py-3 bg-brand-gray/50 border border-transparent rounded-md focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition" />
                                </div>
                                <div>
                                    <label htmlFor="artist-portfolio" className="sr-only">Portfolio or Social Media Link</label>
                                    <input type="url" name="portfolio" id="artist-portfolio" placeholder="Portfolio or Social Media Link" required value={formData.portfolio} onChange={handleChange} className="w-full px-4 py-3 bg-brand-gray/50 border border-transparent rounded-md focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition" />
                                </div>
                                <button type="submit" className="w-full bg-brand-brown text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown font-sans">
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default JoinArtist;
