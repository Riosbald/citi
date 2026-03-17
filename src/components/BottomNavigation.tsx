import React, { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
interface BottomNavigationProps {
  activeTab: 'accounts' | 'payments' | 'services' | 'profile';
}
export function BottomNavigation({
  activeTab
}: BottomNavigationProps) {
  const location = useLocation();
  const tabs = [{
    id: 'accounts',
    label: 'Accounts',
    href: '/accounts',
    ariaLabel: 'View your accounts'
  }, {
    id: 'payments',
    label: 'Payments',
    href: '/payments',
    ariaLabel: 'Make payments and transfers'
  }, {
    id: 'services',
    label: 'Services',
    href: '/services',
    ariaLabel: 'Access banking services'
  }, {
    id: 'profile',
    label: 'Profile',
    href: '/profile',
    ariaLabel: 'Manage your profile'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50" role="navigation" aria-label="Bottom navigation">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isCurrent = location.pathname === tab.href;
        return <Link key={tab.id} to={tab.href} className="flex flex-col items-center gap-1 py-1 px-3 min-w-[70px] hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B6F] focus:ring-inset" aria-label={tab.ariaLabel} aria-current={isCurrent ? 'page' : undefined}>
              {/* Accounts Icon */}
              {tab.id === 'accounts' && <div className="relative w-10 h-10 flex items-center justify-center">
                  <img src="/card-credit-money-currency-finance-payment-svgrepo-com.svg" alt="" className="w-7 h-7" loading="lazy" style={{
              filter: isActive ? 'brightness(0) saturate(100%) invert(14%) sepia(93%) saturate(2466%) hue-rotate(192deg) brightness(95%) contrast(101%)' : 'grayscale(100%) brightness(0.6)'
            }} aria-hidden="true" />
                </div>}

              {/* Payments Icon */}
              {tab.id === 'payments' && <div className="relative w-10 h-10 flex items-center justify-center">
                  <img src="/e0779109-5a75-42a5-b524-078bdb55b067.svg" alt="" className="w-10 h-10" loading="lazy" style={{
              filter: isActive ? 'brightness(0) saturate(100%) invert(14%) sepia(93%) saturate(2466%) hue-rotate(192deg) brightness(95%) contrast(101%)' : 'grayscale(100%) brightness(0.6)'
            }} aria-hidden="true" />
                </div>}

              {/* Services Icon */}
              {tab.id === 'services' && <div className="relative w-10 h-10 flex items-center justify-center">
                  <img src="/lightbulb.svg" alt="" className="w-7 h-7" loading="lazy" style={{
              filter: isActive ? 'brightness(0) saturate(100%) invert(14%) sepia(93%) saturate(2466%) hue-rotate(192deg) brightness(95%) contrast(101%)' : 'grayscale(100%) brightness(0.6)'
            }} aria-hidden="true" />
                </div>}

              {/* Profile Icon */}
              {tab.id === 'profile' && <div className="relative w-7 h-7 flex items-center justify-center">
                  <img src="/cds-profile-service.svg" alt="" className="w-7 h-7" loading="lazy" style={{
              filter: isActive ? 'brightness(0) saturate(100%) invert(14%) sepia(93%) saturate(2466%) hue-rotate(192deg) brightness(95%) contrast(101%)' : 'grayscale(100%) brightness(0.6)'
            }} aria-hidden="true" />
                </div>}

              <span className={`text-[10px] ${isActive ? 'text-[#003B6F] font-semibold' : 'text-gray-500 font-normal'}`}>
                {tab.label}
              </span>
            </Link>;
      })}
      </div>
      {/* iPhone home indicator */}
      <div className="h-5 bg-white flex items-center justify-center pb-2" aria-hidden="true">
        <div className="w-32 h-1 bg-black rounded-full opacity-30"></div>
      </div>
    </nav>;
}