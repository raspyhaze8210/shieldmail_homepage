import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Check, Download, Trash2, Eye, Edit } from 'lucide-react';

const GDPRCompliance = () => {
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
                <span className="gradient-text">GDPR Compliance</span>
              </h1>
              <p className="text-xl text-gray-300">
                Your data protection rights under the General Data Protection Regulation
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to GDPR</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    ShieldMail is fully committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). We believe in transparency, user control, and data minimization.
                  </p>
                  <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
                    <p className="text-primary-400 font-semibold">
                      <Check className="inline mr-2" size={16} />
                      We are GDPR compliant and regularly audit our practices to ensure continued compliance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights Under GDPR</h2>
                <div className="text-gray-300 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Eye className="text-primary-400 mr-3" size={20} />
                        <h3 className="text-lg font-semibold text-white">Right to Access</h3>
                      </div>
                      <p className="text-sm">
                        You can request a copy of all personal data we hold about you, including how it's processed and shared.
                      </p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Edit className="text-secondary-400 mr-3" size={20} />
                        <h3 className="text-lg font-semibold text-white">Right to Rectification</h3>
                      </div>
                      <p className="text-sm">
                        You can request correction of inaccurate or incomplete personal data we hold about you.
                      </p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Trash2 className="text-red-400 mr-3" size={20} />
                        <h3 className="text-lg font-semibold text-white">Right to Erasure</h3>
                      </div>
                      <p className="text-sm">
                        You can request deletion of your personal data when it's no longer necessary for our services.
                      </p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Download className="text-green-400 mr-3" size={20} />
                        <h3 className="text-lg font-semibold text-white">Right to Portability</h3>
                      </div>
                      <p className="text-sm">
                        You can request your data in a structured, machine-readable format to transfer to another service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Protect Your Data</h2>
                <div className="text-gray-300 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Shield className="text-primary-400" size={24} />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Data Minimization</h3>
                      <p className="text-sm">We only collect data that's necessary for our service.</p>
                    </div>

                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-400">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <circle cx="12" cy="16" r="1"></circle>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2">Encryption</h3>
                      <p className="text-sm">All data is encrypted in transit and at rest.</p>
                    </div>

                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2">Access Control</h3>
                      <p className="text-sm">Strict access controls limit who can view your data.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Legal Basis for Processing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We process your personal data based on the following legal grounds:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Contract Performance:</strong> To provide our email forwarding services</li>
                    <li><strong>Legitimate Interest:</strong> To improve our service and prevent abuse</li>
                    <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
                    <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Transfers</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our servers are located in the European Union to ensure your data remains within GDPR jurisdiction. When we do transfer data outside the EU, we ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Adequacy decisions by the European Commission</li>
                    <li>Binding Corporate Rules where applicable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Exercising Your Rights</h2>
                <div className="text-gray-300 space-y-4">
                  <p>To exercise any of your GDPR rights, you can:</p>
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-white mb-2">Self-Service Options</h3>
                        <ul className="text-sm space-y-1">
                          <li>• Access your data through your dashboard</li>
                          <li>• Update your information in account settings</li>
                          <li>• Delete your account and data</li>
                          <li>• Export your data</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Contact Our DPO</h3>
                        <ul className="text-sm space-y-1">
                          <li>• Email: dpo@shieldmail.site</li>
                          <li>• Response time: Within 30 days</li>
                          <li>• Free of charge</li>
                          <li>• Identity verification required</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Breach Notification</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Notify the relevant supervisory authority within 72 hours</li>
                    <li>Inform affected users without undue delay</li>
                    <li>Provide clear information about the breach and our response</li>
                    <li>Take immediate steps to contain and remedy the breach</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Complaints and Supervisory Authority</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you're not satisfied with how we handle your personal data, you have the right to lodge a complaint with your local data protection authority. For users in the EU, you can find your local authority at:
                  </p>
                  <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
                    <p className="text-primary-400">
                      <strong>European Data Protection Board:</strong> https://edpb.europa.eu/about-edpb/about-edpb/members_en
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Our Data Protection Officer</h2>
                <div className="text-gray-300">
                  <p>
                    For any questions about GDPR compliance or to exercise your rights:
                  </p>
                  <div className="mt-4 bg-slate-700/30 rounded-lg p-4">
                    <p>
                      <strong>Data Protection Officer</strong><br />
                      Email: dpo@shieldmail.site<br />
                      Address: ShieldMail DPO, 123 Security Street, Privacy City, PC 12345<br />
                      Response Time: Within 30 days
                    </p>
                  </div>
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

export default GDPRCompliance;