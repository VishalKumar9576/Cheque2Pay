import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "RBI's New Digital Payment Guidelines: What Businesses Need to Know",
      excerpt: "Understanding the latest regulatory changes and their impact on digital cheque processing.",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "RBI Compliance",
      author: "Regulatory Team",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Future of Digital Banking: Beyond Traditional Cheques",
      excerpt: "Exploring how AI and blockchain are reshaping payment verification systems.",
      image: "https://images.pexels.com/photos/3943719/pexels-photo-3943719.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Digital Banking",
      author: "Tech Team",
      date: "March 12, 2024",
      readTime: "7 min read"
    },
    {
      title: "5 Essential Tips for Secure Cheque Processing",
      excerpt: "Best practices to prevent fraud and ensure secure digital cheque transactions.",
      image: "https://images.pexels.com/photos/3943717/pexels-photo-3943717.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Cheque Tips",
      author: "Security Team",
      date: "March 10, 2024",
      readTime: "4 min read"
    }
  ];

  const categories = ["RBI Compliance", "Digital Banking", "Cheque Tips", "Security", "API Updates"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Our Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about digital payment innovations, regulatory updates, and industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button key={index} className="bg-white border border-gray-200 px-4 py-2 rounded-full hover:bg-purple-50 hover:border-purple-200 transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;