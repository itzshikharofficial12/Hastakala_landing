import React, { useState, FormEvent } from 'react';

// Mock gtag for development if it doesn't exist on window
if (typeof window !== 'undefined' && !(window as any).gtag) {
  console.log('Mocking gtag for development.');
  (window as any).gtag = (...args: any[]) => {
    console.log('gtag:', ...args);
  };
}

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleJoinArtistClick = () => {
    const artistSection = document.getElementById('join-as-artist');
    if (artistSection) {
      artistSection.scrollIntoView({ behavior: 'smooth' });
    }
    if ((window as any).gtag) {
      (window as any).gtag('event', 'click_cta_primary', { location: 'hero', action: 'apply_artist' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setFeedbackMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      // Mock API call to POST /api/waitlist
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if ((window as any).gtag) {
        (window as any).gtag('event', 'sign_up_waitlist', { method: 'hero_form', variant: 'hero_v1' });
      }
      setStatus('success');
      setFeedbackMessage("Thanks — you’ll be invited when we launch.");
      
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="container mx-auto px-6 py-20 md:py-24" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 id="hero-title" className="font-serif text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
            HASTAKALA CRAFTS — A marketplace for handcrafted
          </h1>
          <br></br>
          <span className="inline-block border-2 border-brand-brown/20 rounded-full px-4 py-1 text-sm font-semibold text-brand-brown tracking-wide mb-4 font-sans">
            • COMING SOON
          </span>
          <h2 className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg text-brand-dark/90 leading-relaxed">
            Shop directly from India’s finest artisans. Authentic. Fair. Story-driven.
          </h2>
          <p className="mt-4 text-sm text-brand-dark/70">
            Launching Q1 2026 — Join our waitlist for early access & launch offers.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-3 max-w-md mx-auto lg:mx-0" noValidate aria-describedby="waitlist-desc">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting' || status === 'success'}
                className="flex-grow w-full px-4 py-3 border border-gray-300/80 rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-brand-brown transition placeholder:text-gray-500 disabled:bg-gray-100 font-normal"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="bg-brand-brown text-white font-semibold py-3 px-5 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown disabled:bg-brand-brown/60 disabled:cursor-not-allowed whitespace-nowrap font-sans"
              >
                {status === 'submitting' ? 'Joining...' : status === 'success' ? '✓ Success' : 'Join waitlist — Get Early Access'}
              </button>
            </div>
             <p id="waitlist-desc" className="text-xs text-brand-dark/60 text-left pl-1">No spam. Early access & launch offers. Unsubscribe anytime.</p>
             {feedbackMessage && (
                <div 
                    aria-live="polite" 
                    className={`text-sm mt-2 text-left pl-1 font-normal ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}
                >
                    {feedbackMessage}
                </div>
            )}
          </form>

          <button 
            onClick={handleJoinArtistClick}
            className="mt-6 bg-transparent text-brand-brown font-semibold py-3 px-8 rounded-lg border border-brand-brown hover:bg-brand-brown/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown font-sans"
          >
            Join as an Artist
          </button>
        </div>

        {/* Right Visuals */}
        <div className="relative mt-8 lg:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1761416182901-b4fae3717e70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
            alt="Artisan hand-weaving a traditional Indian textile"
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            loading="eager"
          />
          <div className="absolute -bottom-8 right-0 lg:-right-8 flex gap-4" aria-hidden="true">
            <img 
              src="https://images.unsplash.com/photo-1624791469834-9a0f742f78e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232" 
              alt="Close-up of pottery wheel shaping a clay bowl" 
              className="rounded-lg shadow-xl w-32 h-40 md:w-40 md:h-52 object-cover" />
            <img 
              src="https://images.unsplash.com/photo-1603872864499-bd75c625bf0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674" 
              alt="Hand-block printing wooden block and fabric detail" 
              className="rounded-lg shadow-xl w-32 h-40 md:w-40 md:h-52 object-cover" />
            <img 
              src="https://images.unsplash.com/photo-1646318839633-7a1788cf45af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" 
              alt="Hand-block printing wooden block and fabric detail" 
              className="rounded-lg shadow-xl w-32 h-40 md:w-40 md:h-52 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;