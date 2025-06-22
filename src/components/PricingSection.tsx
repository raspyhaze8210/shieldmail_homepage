import React from 'react';
import { Check, X, Mail } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that works best for you. Start with our free tier and upgrade as your needs grow.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-slate-600/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <p className="text-gray-400">Perfect for casual users</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">$0<span className="text-gray-400 text-lg font-normal">/month</span></p>
                <p className="text-gray-400 text-sm mt-1">No credit card required</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-300">Up to 10 active ShieldMail addresses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-300">Email forwarding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-300">7-day email retention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-300">Basic spam protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="text-red-400 mt-0.5" size={20} />
                  <span className="text-gray-400">Custom domains</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="text-red-400 mt-0.5" size={20} />
                  <span className="text-gray-400">Reply with ShieldMail</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="text-red-400 mt-0.5" size={20} />
                  <span className="text-gray-400">Permanent addresses</span>
                </li>
              </ul>
              <a href="https://app.shieldmail.site/auth" className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-xl text-center transition-colors">
                Get Started Free
              </a>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 transition-all duration-300 hover:border-primary-500/50 relative overflow-hidden shadow-xl">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-2 translate-y-6 shadow-lg">
                  POPULAR
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-gray-300">For power users & professionals</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">$4.99<span className="text-gray-300 text-lg font-normal">/month</span></p>
                <p className="text-primary-400 text-sm mt-1">Save 17% with annual billing</p>
                <p className="text-red-400 text-sm mt-1">* 20-per-day anti-abuse limit</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200"><strong>Unlimited</strong> ShieldMail addresses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Advanced email forwarding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Unlimited email retention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Advanced spam protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Custom domains</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Reply with ShieldMail</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-green-400 mt-0.5" size={20} />
                  <span className="text-gray-200">Permanent addresses</span>
                </li>
              </ul>
              <a href="https://app.shieldmail.site/auth" className="block w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-4 rounded-xl text-center transition-colors shadow-lg hover:shadow-primary-500/20">
                Get Premium
              </a>
            </div>
          </div>
          
          {/* Enterprise */}
          <div className="mt-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-400 mb-4 md:mb-0">
                  Need a custom solution for your organization? Contact us for enterprise pricing and features.
                </p>
              </div>
              <a href="mailto:enterprise@shieldmail.site" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center space-x-2">
                <Mail size={20} />
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;