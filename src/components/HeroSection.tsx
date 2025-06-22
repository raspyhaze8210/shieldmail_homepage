import React from 'react';
import { Shield, ArrowRight, Mail, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Protect Your Privacy</span> with Temporary Email Addresses
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            ShieldMail creates disposable email addresses that shield your real inbox from spam, data breaches, and unwanted messages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://app.shieldmail.site/auth" className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/20 flex items-center justify-center space-x-2">
              <Shield size={20} />
              <span>Create Free Account</span>
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
              <ArrowRight size={20} />
              <span>Learn More</span>
            </a>
          </div>
        </div>
        
        {/* Dashboard Preview - No Frames */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="dashboard-showcase">
            <div className="dashboard-container">
              <div className="dashboard-glow"></div>
              <img 
                src="/images/dashboard-preview.png" 
                alt="ShieldMail Dashboard Interface"
                className="dashboard-image"
              />
            </div>
          </div>
        </div>
        
        {/* Email Preview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="gradient-text">Email Preview</span>
            </h3>
            <p className="text-gray-400">
              See how emails are forwarded and managed in real-time
            </p>
          </div>
          
          <div className="email-preview-container">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Your ShieldMail address:</p>
                  <p className="text-lg font-mono text-primary-400 font-medium">swift.guard123@shieldmail.site</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <div className="status-ping"></div>
                  Active
                </div>
              </div>
            </div>
            
            <div className="email-preview-header">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-secondary-400" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">From: <span className="text-white">newsletter@example.com</span></p>
                    <p className="text-sm text-gray-400">Subject: <span className="text-white">Your Weekly Newsletter</span></p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Clock size={14} />
                  <span>Just now</span>
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-sm text-gray-300 mb-4">
                  Hello! This is your weekly newsletter with the latest updates and special offers...
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button className="bg-primary-600/20 text-primary-400 px-3 py-1.5 rounded-lg text-sm flex items-center space-x-1 hover:bg-primary-600/30 transition-colors">
                      <ArrowRight size={14} className="rotate-180" />
                      <span>Reply</span>
                    </button>
                    <button className="bg-secondary-600/20 text-secondary-400 px-3 py-1.5 rounded-lg text-sm flex items-center space-x-1 hover:bg-secondary-600/30 transition-colors">
                      <ArrowRight size={14} />
                      <span>Forward</span>
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    Expires in: <span className="text-primary-400 font-medium">24 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Forwarded to your inbox</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Spam filtered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Privacy protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection;