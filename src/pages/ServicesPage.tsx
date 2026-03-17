import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ShieldIcon, BellIcon, SettingsIcon, HelpCircleIcon, LockIcon, MapPinIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function ServicesPage() {
  const serviceCategories = [{
    title: 'Security & Alerts',
    items: [{
      name: 'Account Alerts',
      icon: BellIcon,
      href: '/services/alerts'
    }, {
      name: 'Security Settings',
      icon: ShieldIcon,
      href: '/services/security'
    }, {
      name: 'Change Password',
      icon: LockIcon,
      href: '/services/password'
    }]
  }, {
    title: 'Account Services',
    items: [{
      name: 'Account Settings',
      icon: SettingsIcon,
      href: '/services/settings'
    }, {
      name: 'Find ATM/Branch',
      icon: MapPinIcon,
      href: '/services/locations'
    }, {
      name: 'Help & Support',
      icon: HelpCircleIcon,
      href: '/services/help'
    }]
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Services
        </h1>

        <div className="space-y-5 sm:space-y-6">
          {serviceCategories.map((category, categoryIndex) => <div key={categoryIndex}>
              <h2 className="text-xs sm:text-sm font-semibold text-gray-600 mb-3 px-2">
                {category.title}
              </h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {category.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return <Link key={itemIndex} to={item.href} className="flex items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 block">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003B6F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#003B6F]" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base text-gray-800 font-normal">
                          {item.name}
                        </h3>
                      </div>
                      <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
                    </Link>;
            })}
              </div>
            </div>)}
        </div>

        <div className="mt-6 bg-[#003B6F] text-white rounded-2xl p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-light mb-2">Need Help?</h3>
          <p className="text-sm text-white/90 mb-4">
            Our customer service team is available 24/7
          </p>
          <button className="w-full bg-white text-[#003B6F] py-2.5 sm:py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors">
            Contact Support
          </button>
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>;
}