import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Developer",
      location: "Mumbai, India",
      rating: 5,
      text: "ShieldMail has completely changed how I handle online signups. I no longer worry about spam or data breaches. The forwarding feature is seamless!",
      initials: "RK"
    },
    {
      name: "Sarah Chen",
      role: "Cybersecurity Analyst", 
      location: "Toronto, Canada",
      rating: 5,
      text: "As a privacy advocate, I've tried many temporary email services. ShieldMail stands out with its clean interface, reliability, and premium features. Worth every penny!",
      initials: "SC"
    },
    {
      name: "Michael Johnson",
      role: "E-commerce Manager",
      location: "Austin, USA",
      rating: 4,
      text: "I use ShieldMail for all my online shopping. It's helped me identify which stores sell my data, and I've reduced spam by 90%. The custom domain feature is fantastic.",
      initials: "MJ"
    },
    {
      name: "Priya Sharma",
      role: "Digital Marketer",
      location: "Bangalore, India", 
      rating: 5,
      text: "ShieldMail is a game-changer for testing email campaigns. I can create multiple addresses instantly and track performance without cluttering my main inbox.",
      initials: "PS"
    },
    {
      name: "James Wilson",
      role: "Freelance Designer",
      location: "London, UK",
      rating: 5,
      text: "The reply feature is brilliant! I can communicate with clients while keeping my personal email private. ShieldMail has become essential for my business.",
      initials: "JW"
    },
    {
      name: "Ananya Patel",
      role: "Startup Founder",
      location: "Delhi, India",
      rating: 4,
      text: "Running a startup means signing up for countless services. ShieldMail helps me organize everything and protects my main email from getting overwhelmed with notifications.",
      initials: "AP"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      location: "Seoul, South Korea",
      rating: 5,
      text: "The spam protection is incredible. I've been using ShieldMail for 6 months and haven't received a single spam email in my main inbox. Highly recommended!",
      initials: "DK"
    },
    {
      name: "Emma Thompson",
      role: "Content Creator",
      location: "Sydney, Australia",
      rating: 5,
      text: "ShieldMail's dashboard is so intuitive. I love how I can see which addresses are getting the most emails and manage them all from one place. Perfect for content creators!",
      initials: "ET"
    },
    {
      name: "Vikram Singh",
      role: "IT Consultant",
      location: "Pune, India",
      rating: 4,
      text: "The data breach protection feature saved me when one of my favorite shopping sites got hacked. I just deleted that ShieldMail address and my real email stayed safe.",
      initials: "VS"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}
      />
    ));
  };

  return (
    <section className="py-20 md:py-32 bg-slate-900/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of satisfied users who trust ShieldMail to protect their privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-slate-600/50">
              <div className="flex items-center space-x-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-300 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <span className="text-primary-400 font-medium text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;