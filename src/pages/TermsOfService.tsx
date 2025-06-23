import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-mesh text-gray-100 font-sans min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Terms of Service</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 1, 2025
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing and using ShieldMail ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    ShieldMail provides anonymous email address services that forward emails to your real email address while protecting your identity. The service includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Creation of anonymous email addresses</li>
                    <li>Email forwarding to your real email address</li>
                    <li>Spam protection and filtering</li>
                    <li>Email management dashboard</li>
                    <li>Custom domain support (premium feature)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when creating an account</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the service in compliance with all applicable laws</li>
                    <li>Not use the service for illegal, harmful, or abusive purposes</li>
                    <li>Not attempt to circumvent usage limits or security measures</li>
                    <li>Not use the service to send spam or malicious content</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Uses</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You may not use ShieldMail for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Illegal activities or violation of any laws</li>
                    <li>Harassment, abuse, or harm to others</li>
                    <li>Sending spam, phishing, or malicious content</li>
                    <li>Creating multiple accounts to circumvent limits</li>
                    <li>Attempting to hack or compromise our systems</li>
                    <li>Reselling or redistributing our services</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Service Availability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    While we strive to provide reliable service, we do not guarantee 100% uptime. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Perform maintenance that may temporarily interrupt service</li>
                    <li>Modify or discontinue features with reasonable notice</li>
                    <li>Suspend accounts that violate these terms</li>
                    <li>Implement usage limits to ensure fair access</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Payment and Billing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>For premium services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payments are processed securely through third-party providers</li>
                    <li>Subscriptions automatically renew unless cancelled</li>
                    <li>Refunds are provided according to our refund policy</li>
                    <li>Price changes will be communicated with 30 days notice</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    ShieldMail is provided "as is" without warranties of any kind. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Lost or delayed emails</li>
                    <li>Service interruptions or downtime</li>
                    <li>Data loss or corruption</li>
                    <li>Indirect or consequential damages</li>
                    <li>Third-party actions or content</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Either party may terminate this agreement at any time. Upon termination:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your access to the service will be discontinued</li>
                    <li>Your data will be deleted according to our retention policy</li>
                    <li>Outstanding payments remain due</li>
                    <li>These terms survive termination where applicable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update these terms from time to time. Significant changes will be communicated via email or service notifications. Continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <div className="text-gray-300">
                  <p>
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <p className="mt-2">
                    <strong>Email:</strong> legal@shieldmail.site<br />
                    <strong>Address:</strong> ShieldMail Legal Team, 123 Security Street, Privacy City, PC 12345
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

export default TermsOfService;