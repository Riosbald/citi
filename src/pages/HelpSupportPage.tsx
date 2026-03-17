import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, MessageCircleIcon, PhoneIcon, MailIcon, BookOpenIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function HelpSupportPage() {
  const navigate = useNavigate();
  const supportOptions = [{
    icon: PhoneIcon,
    title: 'Call Us',
    description: '24/7 Customer Support',
    action: '1-800-374-9700'
  }, {
    icon: MessageCircleIcon,
    title: 'Live Chat',
    description: 'Chat with a representative',
    action: 'Start Chat'
  }, {
    icon: MailIcon,
    title: 'Email Support',
    description: 'Send us a message',
    action: 'support@citi.com'
  }, {
    icon: BookOpenIcon,
    title: 'Help Center',
    description: 'Browse FAQs and guides',
    action: 'View Articles'
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <button onClick={() => navigate('/services')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-6">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Services
        </button>

        <h1 className="text-2xl font-light text-gray-800 mb-6">
          Help & Support
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>We're here to help!</strong> Choose the best way to reach us
            below.
          </p>
        </div>

        <div className="space-y-4">
          {supportOptions.map((option, index) => {
          const Icon = option.icon;
          return <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003B6F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#003B6F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {option.description}
                    </p>
                    <button className="text-sm text-[#003B6F] font-medium hover:underline">
                      {option.action}
                    </button>
                  </div>
                </div>
              </div>;
        })}
        </div>

        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Common Questions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left text-sm text-gray-700 hover:text-[#003B6F] transition-colors">
              How do I reset my password?
            </button>
            <button className="w-full text-left text-sm text-gray-700 hover:text-[#003B6F] transition-colors">
              How do I report a lost or stolen card?
            </button>
            <button className="w-full text-left text-sm text-gray-700 hover:text-[#003B6F] transition-colors">
              How do I dispute a transaction?
            </button>
            <button className="w-full text-left text-sm text-gray-700 hover:text-[#003B6F] transition-colors">
              How do I update my contact information?
            </button>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>;
}