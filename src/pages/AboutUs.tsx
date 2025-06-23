import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Mail, Users, Target, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-mesh text-gray-100 font-sans min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About ShieldMail</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Protecting your digital identity, one email at a time. We believe everyone deserves control over their personal information.
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="gradient-text">Our Mission</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    In an era where digital privacy is constantly under threat, ShieldMail was born from a simple yet powerful idea: 
                    everyone should have the right to protect their personal email address from spam, data breaches, and unwanted intrusions.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We're building the most secure, user-friendly anonymous email service that empowers individuals and businesses 
                    to take control of their digital footprint without sacrificing convenience.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl p-8 border border-primary-500/30">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary-400 mb-2">10K+</div>
                        <div className="text-gray-300">Active Users</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary-400 mb-2">1M+</div>
                        <div className="text-gray-300">Emails Protected</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                        <div className="text-gray-300">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                        <div className="text-gray-300">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Our Core Values</span>
              </h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do at ShieldMail
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-primary-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
                <p className="text-gray-300">
                  Your privacy is not negotiable. We never read, analyze, or sell your data. 
                  What's yours stays yours.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-secondary-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-secondary-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">User-Centric</h3>
                <p className="text-gray-300">
                  Every feature we build is designed with our users in mind. 
                  Simple, intuitive, and powerful.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We're committed to delivering the highest quality service with 
                  industry-leading security and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">Meet Our Founder</span>
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center border-4 border-primary-500/30">
                    <div className="w-40 h-40 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-400">RS</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Rohit Singh</h3>
                  <p className="text-lg text-primary-400 mb-6">Founder & CEO</p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Rohit Singh is a passionate privacy advocate and experienced software engineer who founded ShieldMail 
                    after experiencing firsthand the frustration of spam and data breaches. With over a decade of experience 
                    in cybersecurity and email systems, Rohit envisioned a world where everyone could enjoy the convenience 
                    of digital communication without sacrificing their privacy.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    "Privacy shouldn't be a luxury—it should be a fundamental right. ShieldMail exists to make that right 
                    accessible to everyone, everywhere." - Rohit Singh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="gradient-text">Our Story</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Target className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">The Problem</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In 2023, Rohit noticed that his personal email was flooded with spam after signing up for various online services. 
                      Despite being careful about where he shared his email, data breaches and aggressive marketing practices meant 
                      his inbox was no longer his own.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Mail className="text-secondary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Existing anonymous email services were either unreliable, insecure, or too complicated for everyday use. 
                      Rohit realized there was a need for a professional-grade service that was both secure and user-friendly. 
                      ShieldMail was born from this vision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Users className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">The Future</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Today, ShieldMail serves thousands of users worldwide, from individual privacy enthusiasts to large enterprises. 
                      We're continuously innovating to stay ahead of emerging threats and provide the most comprehensive email privacy 
                      solution available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-primary-500/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Join Our Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the privacy revolution. Protect your digital identity with ShieldMail today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="https://app.shieldmail.site/auth" className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/20 flex items-center justify-center space-x-2">
                  <Shield size={20} />
                  <span>Start Protecting Your Privacy</span>
                </a>
                <a href="mailto:rohit@shieldmail.site" className="w-full sm:w-auto bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Mail size={20} />
                  <span>Contact Rohit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;