import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="bg-mesh text-gray-100 font-sans min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cookie className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Cookie Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 1, 2025
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
                <div className="text-gray-300 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-2">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly. They enable core functionality such as:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>User authentication and session management</li>
                      <li>Security features and fraud prevention</li>
                      <li>Basic website functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary-400 mb-2">Functional Cookies</h3>
                    <p>These cookies enhance your experience by remembering your preferences:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Language and region settings</li>
                      <li>Theme preferences (dark/light mode)</li>
                      <li>Dashboard layout customizations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Analytics Cookies</h3>
                    <p>These cookies help us understand how visitors use our website:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Page views and user interactions</li>
                      <li>Performance metrics and error tracking</li>
                      <li>Usage patterns and popular features</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We may use third-party services that set their own cookies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing (Stripe, PayPal)</li>
                    <li><strong>CDN Services:</strong> For faster content delivery</li>
                  </ul>
                  <p>
                    These third parties have their own privacy policies and cookie practices, which we encourage you to review.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                <div className="text-gray-300 space-y-4">
                  <p>You can control cookies through:</p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                    <p>Most browsers allow you to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>View and delete existing cookies</li>
                      <li>Block cookies from specific websites</li>
                      <li>Block all cookies (may affect functionality)</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Our Cookie Preferences</h3>
                    <p>
                      We provide a cookie consent banner where you can choose which types of cookies to accept. You can update your preferences at any time by clicking the "Cookie Settings" link in our footer.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Retention</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Different cookies have different lifespans:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                    <li><strong>Authentication Cookies:</strong> Expire when you log out or after 30 days of inactivity</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Impact of Disabling Cookies</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    While you can disable cookies, doing so may affect your experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You may need to log in repeatedly</li>
                    <li>Your preferences won't be saved</li>
                    <li>Some features may not work properly</li>
                    <li>The website may load more slowly</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the updated policy on our website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                <div className="text-gray-300">
                  <p>
                    If you have questions about our use of cookies, please contact us at:
                  </p>
                  <p className="mt-2">
                    <strong>Email:</strong> cookies@shieldmail.site<br />
                    <strong>Address:</strong> ShieldMail Cookie Team, 123 Security Street, Privacy City, PC 12345
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

export default CookiePolicy;