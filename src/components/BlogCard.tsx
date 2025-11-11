import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white text-sm font-medium bg-brand-brown px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link 
            to={`/blog/${post.id}`}
            className="text-brand-brown hover:text-brand-dark font-medium transition-colors flex items-center"
          >
            Read More
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
