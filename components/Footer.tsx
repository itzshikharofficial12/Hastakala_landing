import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-serif font-bold text-white mb-4">About</h3>
            <p className="text-sm leading-relaxed">
              Hastakala Crafts — coming soon. Curating India's finest artisans. Direct. Fair. Beautifully crafted.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Legal & Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="mailto:hello@hastakala.in" className="hover:text-white transition-colors">hello@hastakala.in</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hastakala Crafts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;