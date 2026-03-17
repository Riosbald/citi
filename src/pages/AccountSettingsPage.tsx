import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, BellIcon, ShieldIcon, CreditCardIcon, UserIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function AccountSettingsPage() {
  const navigate = useNavigate();
  const settings = [{
    icon: UserIcon,
    title: 'Personal Information',
    description: 'Update your name, email, and phone',
    href: '/profile'
  }, {
    icon: BellIcon,
    title: 'Notifications',
    description: 'Manage alerts and notifications',
    href: '/services/alerts'
  }, {
    icon: ShieldIcon,
    title: 'Security',
    description: 'Password and security settings',
    href: '/services/security'
  }, {
    icon: CreditCardIcon,
    title: 'Linked Accounts',
    description: 'Manage your connected accounts',
    href: '/profile/linked-accounts'
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <button onClick={() => navigate('/services')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-6">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Services
        </button>

        <h1 className="text-2xl font-light text-gray-800 mb-6">
          Account Settings
        </h1>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {settings.map((setting, index) => {
          const Icon = setting.icon;
          return <button key={index} onClick={() => navigate(setting.href)} className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 text-left">
                <div className="w-12 h-12 bg-[#003B6F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#003B6F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium mb-1">
                    {setting.title}
                  </h3>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </button>;
        })}
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>;
}