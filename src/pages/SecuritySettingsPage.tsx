import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, LockIcon, ShieldIcon, SmartphoneIcon, KeyIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function SecuritySettingsPage() {
  const navigate = useNavigate();
  const securityOptions = [{
    icon: KeyIcon,
    title: 'Change Password',
    description: 'Update your account password',
    href: '/services/password'
  }, {
    icon: SmartphoneIcon,
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security',
    href: '/services/2fa'
  }, {
    icon: ShieldIcon,
    title: 'Security Questions',
    description: 'Update your security questions',
    href: '/services/security-questions'
  }, {
    icon: LockIcon,
    title: 'Trusted Devices',
    description: 'Manage devices that can access your account',
    href: '/services/devices'
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <button onClick={() => navigate('/services')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-6">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Services
        </button>

        <h1 className="text-2xl font-light text-gray-800 mb-6">
          Security Settings
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Security Status:</strong> Your account is protected with
            industry-standard security measures.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {securityOptions.map((option, index) => {
          const Icon = option.icon;
          return <button key={index} onClick={() => navigate(option.href)} className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 text-left">
                <div className="w-12 h-12 bg-[#003B6F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#003B6F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </button>;
        })}
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>;
}