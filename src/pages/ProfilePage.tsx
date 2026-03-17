import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRightIcon,
  UserIcon,
  MailIcon,
  LogOutIcon,
  SettingsIcon,
  CreditCardIcon } from
'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { useAuth } from '../contexts/AuthContext';
export function ProfilePage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#003B6F] rounded-full flex items-center justify-center mx-auto mb-4">
            <UserIcon
              className="w-10 h-10 sm:w-12 sm:h-12 text-white"
              strokeWidth={1.5} />
            
          </div>
          <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-1">
            Jacqueline Brooks
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Customer since 2015
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5 sm:mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-600 mb-3">
              Personal Information
            </h2>
          </div>

          <Link
            to="/profile/email"
            className="flex items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors block">
            
            <MailIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="text-sm sm:text-base text-gray-800 truncate">
                jacqueline.brooks@citibank.com
              </p>
            </div>
            <ChevronRightIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5 sm:mb-6">
          <Link
            to="/profile/preferences"
            className="flex items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 block">
            
            <SettingsIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-800">Preferences</p>
            </div>
            <ChevronRightIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
          </Link>

          <Link
            to="/profile/linked-accounts"
            className="flex items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors block">
            
            <CreditCardIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-800">
                Linked Accounts
              </p>
            </div>
            <ChevronRightIcon
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={2} />
            
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-white text-red-600 py-3 sm:py-3.5 px-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 hover:bg-red-50 active:bg-red-100 transition-colors">
          
          <LogOutIcon className="w-5 h-5" strokeWidth={2} />
          <span className="text-sm sm:text-base font-medium">Sign Out</span>
        </button>
      </main>

      <BottomNavigation activeTab="profile" />
    </div>);

}