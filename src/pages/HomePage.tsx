import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { Monitor, Database, Zap, Layers } from 'lucide-react';

const HomePage = () => {
  // Mouse follow wobble effect
  React.useEffect(() => {
    const wobbleContainer = document.querySelector('.wobble-container');
    const wobbleImage = document.querySelector('.wobble-image');
    
    if (wobbleContainer && wobbleImage) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = wobbleContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        (wobbleImage as HTMLElement).style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        (wobbleImage as HTMLElement).style.transform = 'rotateX(0deg) rotateY(0deg)';
      };
      
      wobbleContainer.addEventListener('mousemove', handleMouseMove);
      wobbleContainer.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        wobbleContainer.removeEventListener('mousemove', handleMouseMove);
        wobbleContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="bg-mesh text-gray-100 font-sans">
      <Header />
      <HeroSection />
      
      {/* Trusted By Section */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by thousands of users worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="grayscale hover:grayscale-0 transition-all duration-300 text-center">
              <Monitor className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-gray-500 text-sm">TechCorp</p>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 text-center">
              <Database className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-gray-500 text-sm">DataStack</p>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 text-center">
              <Layers className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-gray-500 text-sm">Infinite</p>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 text-center">
              <Zap className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-gray-500 text-sm">FlashNet</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-slate-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">How ShieldMail Works</span>
            </h2>
            <p className="text-xl text-gray-300">
              Protecting your identity has never been easier. ShieldMail creates a secure barrier between you and potential threats.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  1
                </div>
                <div className="pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Create Anonymous Email</h3>
                  <p className="text-gray-400 text-center">
                    Sign up for a free account and create your first real anonymous email address in seconds.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  2
                </div>
                <div className="pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-secondary-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-400">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Use It Anywhere</h3>
                  <p className="text-gray-400 text-center">
                    Use your anonymous ShieldMail address for signups, forms, and anywhere you'd normally use your real email.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  3
                </div>
                <div className="pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Manage & Respond</h3>
                  <p className="text-gray-400 text-center">
                    Receive emails in your dashboard or real inbox. Reply, forward, or delete as needed while staying anonymous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about ShieldMail and how it can help protect your identity.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Items */}
              {[
                {
                  question: "What is ShieldMail?",
                  answer: "ShieldMail is an anonymous email service that allows you to create real email addresses that protect your identity. These addresses can forward messages to your real inbox while keeping your actual email address private. It's perfect for signups, online shopping, and protecting yourself from spam and data breaches."
                },
                {
                  question: "Are ShieldMail addresses real email addresses?",
                  answer: "Yes! ShieldMail creates real, fully functional email addresses that can receive and send emails just like any other email address. The difference is that they protect your identity by acting as a shield between you and the outside world."
                },
                {
                  question: "How does email forwarding work?",
                  answer: "When you create a ShieldMail address, you can enable email forwarding to your real email address. Any emails sent to your ShieldMail address will be automatically forwarded to your real inbox. The sender will only see your ShieldMail address, keeping your real email private. You can toggle forwarding on or off for each ShieldMail address individually."
                },
                {
                  question: "Can I reply to emails I receive?",
                  answer: "Yes! With our premium plan, you can reply directly to emails from your real inbox, and the response will appear to come from your anonymous ShieldMail address. This maintains your anonymity while allowing two-way communication. Free users can still reply by logging into the ShieldMail dashboard."
                },
                {
                  question: "How long do anonymous addresses last?",
                  answer: "Free users can create addresses that last up to 7 days. Premium users can create addresses with custom durations, including 1 month, 1 year, or even permanent addresses that never expire. You can also manually delete any address at any time if you start receiving unwanted emails."
                },
                {
                  question: "Can I use my own domain?",
                  answer: "Yes, premium users can add their own custom domains to ShieldMail. This gives you a more professional appearance while still maintaining all the anonymity benefits. We provide simple DNS setup instructions, and our system will verify your domain automatically once the records are in place."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Ready to Protect Your Identity?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of users who trust ShieldMail to protect their real email address from spam, data breaches, and unwanted tracking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://app.shieldmail.site/auth" className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/20 flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Create Anonymous Email</span>
              </a>
              <a href="#pricing" className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span>View Pricing</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;