import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-mesh text-gray-100 font-sans min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 1, 2025
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    At ShieldMail, we collect minimal information necessary to provide our service:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your real email address (for forwarding purposes)</li>
                    <li>Account credentials (username and encrypted password)</li>
                    <li>ShieldMail addresses you create</li>
                    <li>Basic usage statistics (number of emails forwarded, addresses created)</li>
                    <li>Technical information (IP address, browser type, device information)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use your information solely to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide email forwarding services</li>
                    <li>Maintain and improve our service</li>
                    <li>Communicate with you about your account</li>
                    <li>Prevent abuse and ensure security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p className="font-semibold text-primary-400">
                    We never read, analyze, or share the content of your emails.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Retention</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We retain your data only as long as necessary:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Free accounts: Emails are stored for 7 days maximum</li>
                    <li>Premium accounts: Emails are stored according to your settings</li>
                    <li>Account data: Retained until account deletion</li>
                    <li>Logs: Automatically deleted after 30 days</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We do not sell, rent, or share your personal information with third parties, except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law or legal process</li>
                    <li>To protect our rights or the safety of our users</li>
                    <li>With service providers who help us operate our service (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Security</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We implement industry-standard security measures:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Encrypted storage of sensitive information</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to user data by authorized personnel only</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and associated data</li>
                    <li>Export your data</li>
                    <li>Opt-out of non-essential communications</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <div className="text-gray-300">
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-2">
                    <strong>Email:</strong> privacy@shieldmail.site<br />
                    <strong>Address:</strong> ShieldMail Privacy Team, 123 Security Street, Privacy City, PC 12345
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;