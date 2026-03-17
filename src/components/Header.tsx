import React, { useEffect, useState, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MenuIcon, SearchIcon, XIcon, HelpCircleIcon, UserIcon, SettingsIcon } from 'lucide-react';
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    logout
  } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);
  const handleSignOff = () => {
    logout();
    navigate('/login');
  };
  const menuItems = [{
    icon: SearchIcon,
    label: 'Search',
    onClick: () => {},
    ariaLabel: 'Search accounts and transactions'
  }, {
    icon: HelpCircleIcon,
    label: 'Help & Support',
    onClick: () => navigate('/services/help'),
    ariaLabel: 'Get help and support'
  }, {
    icon: UserIcon,
    label: 'Profile',
    onClick: () => navigate('/profile'),
    ariaLabel: 'View your profile'
  }, {
    icon: SettingsIcon,
    label: 'Settings',
    onClick: () => navigate('/services/settings'),
    ariaLabel: 'Manage account settings'
  }];
  return <>
      <header className="bg-white border-b border-gray-200" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="relative flex-shrink-0">
              <button onClick={() => navigate('/accounts')} className="focus:outline-none focus:ring-2 focus:ring-[#003B6F] focus:ring-offset-2 rounded" aria-label="Go to Citibank home">
                <img src="/logo.svg" alt="Citibank Logo" className="h-8 sm:h-10 md:h-12" loading="eager" width="120" height="48" />
              </button>
            </div>

            {/* Right side - Actions */}
            <nav className="flex items-center gap-2 sm:gap-4" aria-label="Main navigation">
              {/* Search and Help - Hidden on small screens */}
              <div className="hidden md:flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B6F]" aria-label="Search">
                  <SearchIcon className="w-5 h-5 text-[#003B6F]" aria-hidden="true" />
                </button>
                <span className="text-sm text-[#003B6F] font-normal">
                  How can we help?
                </span>
              </div>

              {/* Mobile menu button */}
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B6F]" aria-label="Open navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
                <MenuIcon className="w-5 h-5 text-[#003B6F]" aria-hidden="true" />
              </button>

              {/* Sign Off button */}
              <button onClick={handleSignOff} className="text-sm text-[#003B6F] border-l border-gray-300 pl-3 sm:pl-4 font-normal hover:text-[#002B50] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B6F] focus:ring-offset-2 rounded" aria-label="Sign out of your account">
                Sign Off
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />

          {/* Menu Panel */}
          <div id="mobile-menu" className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl animate-slide-in-right">
            {/* Menu Header with Logo */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <img src="/logo.svg" alt="Citibank" className="h-8" loading="lazy" width="96" height="32" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B6F]" aria-label="Close navigation menu">
                <XIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-4" aria-label="Mobile navigation">
              <h2 id="mobile-menu-title" className="sr-only">
                Navigation Menu
              </h2>
              <ul className="space-y-1" role="list">
                {menuItems.map((item, index) => <li key={index}>
                    <button onClick={() => {
                item.onClick();
                setIsMobileMenuOpen(false);
              }} className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[#003B6F]" aria-label={item.ariaLabel}>
                      <item.icon className="w-5 h-5 text-gray-500" strokeWidth={2} aria-hidden="true" />
                      <span className="text-[15px] font-normal">
                        {item.label}
                      </span>
                    </button>
                  </li>)}
              </ul>

              {/* Sign Off in Menu */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button onClick={() => {
              handleSignOff();
              setIsMobileMenuOpen(false);
            }} className="w-full flex items-center justify-center px-4 py-3 bg-[#003B6F] text-white rounded-lg hover:bg-[#002B50] transition-colors text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#003B6F] focus:ring-offset-2" aria-label="Sign out of your account">
                  Sign Off
                </button>
              </div>
            </nav>
          </div>
        </div>}
    </>;
}