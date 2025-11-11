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
    const artistSection = document.getElementById('join-artist');
    if (artistSection) {
      artistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setFeedbackMessage('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
      setFeedbackMessage("Thanks — you'll be invited when we launch.");

    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen">
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
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <section className="container mx-auto px-6 py-20 md:py-24" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 id="hero-title" className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
            HASTAKALA CRAFTS — A marketplace for handcrafted
          </h1>
          <br></br>
          <span className="inline-block border-2 border-brand-brown/20 rounded-full px-4 py-1 text-sm font-semibold text-brand-brown tracking-wide mb-4 font-sans">
            • COMING SOON
          </span>
          <h2 className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg text-black/90 leading-relaxed">
            Shop directly from India's finest artisans. Authentic. Fair. Story-driven.
          </h2>
          <p className="mt-4 text-sm text-black/80">
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
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-brown focus:border-transparent focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="px-6 py-3 bg-brand-brown text-white font-medium rounded-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown disabled:opacity-50 transition-colors"
              >
                {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {feedbackMessage && (
              <p
                id="waitlist-desc"
                className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}
              >
                {feedbackMessage}
              </p>
            )}
          </form>
        </div>

        {/* Right Content - Decorative Images */}
        <div className="relative h-96 lg:h-auto">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Large image on left */}
            <div className="relative row-span-2 h-full">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                alt="Handcrafted pottery on display"
                className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
            {/* Three smaller images on right */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1624791469834-9a0f742f78e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232"
                alt="Close-up of pottery wheel shaping a clay bowl"
                className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603872864499-bd75c625bf0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
                alt="Hand-block printing wooden block and fabric detail"
                className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1646318839633-7a1788cf45af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt="Hand-block printing wooden block and fabric detail"
                className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1646318839633-7a1788cf45af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt="Hand-block printing wooden block and fabric detail"
                className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Hero;