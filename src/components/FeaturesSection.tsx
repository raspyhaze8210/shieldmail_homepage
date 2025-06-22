import React from 'react';
import { Shield, Mail, ArrowLeft, ShieldCheck, AlertTriangle, Globe, Check, Settings } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Disposable Email Addresses",
      description: "Create unlimited temporary email addresses that forward to your real inbox. Perfect for signups, trials, and online shopping.",
      color: "primary",
      image: "/images/disposable-emails.png",
      benefits: [
        "Custom email prefixes",
        "Multiple domain options", 
        "Flexible expiration times"
      ]
    },
    {
      icon: Mail,
      title: "Email Tags & Organization",
      description: "Organize your emails with smart tagging system. Categorize and manage your temporary addresses efficiently.",
      color: "secondary",
      image: "/images/email-tags.png",
      benefits: [
        "Smart email tagging",
        "Category organization",
        "Easy email filtering"
      ]
    },
    {
      icon: ArrowLeft,
      title: "Bulk Address Creation",
      description: "Create multiple ShieldMail addresses at once for different purposes. Streamline your privacy protection workflow.",
      color: "green",
      image: "/images/bulk-creation.png",
      benefits: [
        "Bulk address generation",
        "Batch management tools",
        "Quick setup process"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Transfer & Management",
      description: "Transfer ownership of ShieldMail addresses and manage forwarding settings with advanced controls.",
      color: "yellow",
      image: "/images/transfer-management.png",
      benefits: [
        "Address ownership transfer",
        "Advanced forwarding controls",
        "User management features"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Forwarding Configuration",
      description: "Configure multiple forwarding addresses and manage email routing with precision and flexibility.",
      color: "red",
      image: "/images/forwarding-config.png",
      benefits: [
        "Multiple forwarding targets",
        "Advanced routing rules",
        "Real-time configuration"
      ]
    },
    {
      icon: Settings,
      title: "Manage Your Burners",
      description: "Comprehensive dashboard to manage all your temporary email addresses with detailed analytics and controls.",
      color: "orange",
      image: "/images/manage-burners.png",
      benefits: [
        "Complete address overview",
        "Usage analytics",
        "Bulk management tools"
      ]
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Premium users can add their own domains for a personalized and professional email experience with the same privacy benefits.",
      color: "purple",
      image: "/images/custom-domains.png",
      benefits: [
        "Use your own domain",
        "Easy DNS setup",
        "Professional appearance"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "from-primary-500/20 to-primary-500/10 text-primary-400",
      secondary: "from-secondary-500/20 to-secondary-500/10 text-secondary-400",
      green: "from-green-500/20 to-green-500/10 text-green-400",
      yellow: "from-yellow-500/20 to-yellow-500/10 text-yellow-400",
      red: "from-red-500/20 to-red-500/10 text-red-400",
      orange: "from-orange-500/20 to-orange-500/10 text-orange-400",
      purple: "from-purple-500/20 to-purple-500/10 text-purple-400",
      blue: "from-blue-500/20 to-blue-500/10 text-blue-400"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span> to Protect Your Privacy
          </h2>
          <p className="text-xl text-gray-300">
            ShieldMail offers a comprehensive suite of tools designed to keep your real email address private and your inbox clean.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center`}>
                  <feature.icon size={28} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="text-green-400 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Image Frame with Thin Border and Wobbling Effect */}
              <div className="flex-1 relative group feature-image-container">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-slate-500/40">
                  <div className="relative overflow-hidden rounded-lg bg-slate-900/20 feature-image-frame">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 feature-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;