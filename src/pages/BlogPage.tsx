import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Hastakala Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover stories, traditions, and insights from India's rich craft heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={100 * parseInt(post.id)}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-600 mb-4">
            Want to learn more about Indian crafts?
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-brown hover:text-brand-dark transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => window.location.href = '/', 100);
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
