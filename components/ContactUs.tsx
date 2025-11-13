
import React, { useState } from 'react';
import { EmailIcon, InstagramIcon, LinkedInIcon } from './icons';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://i.ibb.co/NdJHkp9T/Contact-Us.png')",
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
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-white">Contact Us</h2>
                        <p className="text-white/80 mt-2">Have questions? We'd love to hear from you.</p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/90 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-xl border border-white/20">
                    <div className="space-y-8">
                        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-brand-brown/10 p-2 rounded-full">
                                    <EmailIcon />
                                </div>
                                <h3 className="font-semibold tracking-wider text-sm text-gray-700 font-sans">EMAIL</h3>
                            </div>
                            <a href="mailto:hello@hastakala.in" className="text-gray-800 hover:text-brand-brown transition-colors">hello@hastakala.in</a>
                        </div>
                        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20">
                            <h3 className="font-semibold tracking-wider text-sm text-gray-700 mb-3 font-sans">FOLLOW US</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/hastakala.crafts/" className="text-gray-700 hover:text-brand-brown transition-colors"><InstagramIcon /></a>
                                <a href="https://www.linkedin.com/company/hastakala/posts/?feedView=all" className="text-gray-700 hover:text-brand-brown transition-colors"><LinkedInIcon /></a>
                             </div>
                        </div>
                         <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20">
                            <h3 className="font-semibold tracking-wider text-sm text-gray-700 mb-2 font-sans">Based in India</h3>
                            <p className="text-gray-800">Operations: Pan-India</p>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-brand-gray/50 border border-transparent rounded-md focus:ring-brand-brown focus:border-brand-brown transition font-light" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-brand-gray/50 border border-transparent rounded-md focus:ring-brand-brown focus:border-brand-brown transition font-light" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea name="message" id="message" rows={5} placeholder="Message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-brand-gray/50 border border-transparent rounded-md focus:ring-brand-brown focus:border-brand-brown transition font-light"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-brown text-white font-semibold py-3 px-8 rounded-md hover:bg-brand-brown/90 transition-all hover:shadow-lg hover:-translate-y-0.5 font-sans">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ContactUs;