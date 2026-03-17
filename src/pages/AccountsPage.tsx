import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRightIcon,
  BellIcon,
  CreditCardIcon,
  SendIcon,
  DollarSignIcon,
  XIcon,
  DollarSignIcon as SalaryIcon,
  ShieldCheckIcon,
  FileTextIcon,
  ClockIcon,
  PercentIcon } from
'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';
import { useTransactions } from '../contexts/TransactionContext';
const notifications = [
{
  id: 1,
  icon: DollarSignIcon,
  iconBg: 'bg-green-100',
  iconColor: 'text-green-600',
  title: 'Salary Deposited',
  message: 'Direct deposit of $32,000.00 received into Interest Checking 847',
  time: '2 hours ago',
  unread: true
},
{
  id: 2,
  icon: ShieldCheckIcon,
  iconBg: 'bg-blue-100',
  iconColor: 'text-blue-600',
  title: 'New Login Detected',
  message: 'Your account was accessed from iPhone 15 Pro, New York, NY',
  time: '5 hours ago',
  unread: true
},
{
  id: 3,
  icon: FileTextIcon,
  iconBg: 'bg-purple-100',
  iconColor: 'text-purple-600',
  title: 'Statement Ready',
  message: 'Your February 2026 credit card statement is now available',
  time: '1 day ago',
  unread: false
},
{
  id: 4,
  icon: ClockIcon,
  iconBg: 'bg-amber-100',
  iconColor: 'text-amber-600',
  title: 'Bill Payment Reminder',
  message: 'Internet Provider payment of $89.99 is due in 3 days',
  time: '1 day ago',
  unread: false
},
{
  id: 5,
  icon: PercentIcon,
  iconBg: 'bg-red-100',
  iconColor: 'text-red-600',
  title: 'Interest Charge Posted',
  message: 'Credit card interest charge of $45.67 posted to your account',
  time: '2 days ago',
  unread: false
}];

export function AccountsPage() {
  const { transactions } = useTransactions();
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => n.unread).length;
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications]);
  const currentDate = new Date().toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  const accounts = [
  {
    id: 'checking',
    section: 'CHECKING',
    name: 'Interest Checking 847',
    number: '****2847',
    amount: 232761.23,
    status: 'available now',
    href: '/account-detail'
  },
  {
    id: 'savings',
    section: 'SAVINGS',
    name: 'Savings Plus Account 923',
    number: '****5923',
    amount: 156892.34,
    status: 'available now',
    href: '/account-detail'
  },
  {
    id: 'credit',
    section: 'CREDIT CARDS',
    name: 'Citi® Credit Card 6104',
    number: '****6104',
    amount: 2847.56,
    status: 'current balance',
    href: '/account-detail'
  }];

  const recentTransactions = transactions.slice(0, 3);
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header with White Logo on Dark Background */}
      <div className="bg-gradient-to-br from-[#003B6F] to-[#002B50] text-white p-6 rounded-b-3xl shadow-lg relative z-20">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/logo.svg"
              alt="Citi"
              className="h-10 sm:h-12 md:h-14" />
            
          </div>

          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-light">Welcome back</h2>
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors relative"
                aria-label="View notifications">
                
                <BellIcon className="w-5 h-5" />
                {unreadCount > 0 &&
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                }
              </button>

              {/* Notifications Dropdown */}
              {showNotifications &&
              <div className="absolute right-0 top-12 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Notifications
                    </h3>
                    <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Close notifications">
                    
                      <XIcon className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>

                  {/* Notification Items */}
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notif) => {
                    const Icon = notif.icon;
                    return (
                      <div
                        key={notif.id}
                        className={`flex items-start gap-3 px-4 py-3.5 border-b border-gray-50 last:border-0 transition-colors ${notif.unread ? 'bg-blue-50/50' : 'bg-white'}`}>
                        
                          <div
                          className={`w-9 h-9 ${notif.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          
                            <Icon
                            className={`w-4 h-4 ${notif.iconColor}`}
                            strokeWidth={2} />
                          
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {notif.title}
                              </p>
                              {notif.unread &&
                            <span className="w-2 h-2 bg-[#003B6F] rounded-full flex-shrink-0"></span>
                            }
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {notif.message}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-1">
                              {notif.time}
                            </p>
                          </div>
                        </div>);

                  })}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                    <Link
                    to="/services/alerts"
                    onClick={() => setShowNotifications(false)}
                    className="text-[#003B6F] text-sm font-medium hover:underline flex items-center justify-center gap-1">
                    
                      Manage Alert Settings
                      <ChevronRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              }
            </div>
          </div>
          <p className="text-sm text-white/80">
            Last signed in: {currentDate} EST
          </p>
        </div>
      </div>

      {/* Backdrop when notifications open */}
      {showNotifications &&
      <div
        className="fixed inset-0 bg-black/20 z-10"
        onClick={() => setShowNotifications(false)} />

      }

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/payments/bills"
              className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
              
              <div className="bg-[#003B6F]/10 rounded-full p-3 mb-2">
                <CreditCardIcon className="w-6 h-6 text-[#003B6F]" />
              </div>
              <span className="text-xs text-center text-gray-700">
                Pay Bills
              </span>
            </Link>

            <Link
              to="/payments/transfer"
              className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
              
              <div className="bg-[#003B6F]/10 rounded-full p-3 mb-2">
                <svg
                  className="w-6 h-6 text-[#003B6F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  
                </svg>
              </div>
              <span className="text-xs text-center text-gray-700">
                Transfer
              </span>
            </Link>

            <Link
              to="/payments"
              className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
              
              <div className="bg-[#003B6F]/10 rounded-full p-3 mb-2">
                <DollarSignIcon className="w-6 h-6 text-[#003B6F]" />
              </div>
              <span className="text-xs text-center text-gray-700">
                Send Money
              </span>
            </Link>
          </div>
        </div>

        {/* Accounts Section */}
        {accounts.map((account, index) =>
        <div key={account.id} className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 tracking-wide mb-2 px-1">
              {account.section}
            </h2>
            <Link
            to={account.href}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all block">
            
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium text-base mb-1">
                    {account.name}
                  </h3>
                  <p className="text-sm text-gray-500">{account.number}</p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-light text-[#003B6F]">
                  ${Math.floor(account.amount).toLocaleString()}
                </span>
                <span className="text-lg font-light text-[#003B6F]">
                  .{(account.amount % 1).toFixed(2).split('.')[1]}
                </span>
              </div>
              <p className="text-xs text-[#003B6F]">{account.status}</p>
            </Link>
          </div>
        )}

        {/* Spending Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Your total spend for October is
          </p>
          <div className="flex items-baseline justify-center mb-2">
            <span className="text-5xl font-light text-gray-800">$429</span>
            <span className="text-2xl font-light text-gray-800 ml-1">.46</span>
          </div>
          <p className="text-xs text-gray-500">Last month you spent $945.83</p>
        </div>

        {/* Spending Categories Preview */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Spending Categories
            </h3>
            <Link
              to="/spending"
              className="text-[#003B6F] text-sm font-medium flex items-center hover:underline">
              
              See All <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#003B6F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v18m-6-9h12" />
                    
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Restaurants
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">-$371.16</p>
                <p className="text-xs text-gray-500">-$360.97 last mo.</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Shopping
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">-$39.24</p>
                <p className="text-xs text-gray-500">-$242.59 last mo.</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    
                    <ellipse cx="12" cy="12" rx="5" ry="8" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Health & Pharmacy
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">-$19.06</p>
                <p className="text-xs text-gray-500">-$0.00 last mo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        {recentTransactions.length > 0 &&
        <div className="bg-white rounded-2xl shadow-sm mb-6">
            <div className="p-5 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800">
                  Recent Transactions
                </h2>
                <Link
                to="/payments/activity"
                className="text-[#003B6F] text-sm font-medium flex items-center hover:underline">
                
                  See All <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {recentTransactions.map((transaction, index) =>
          <div
            key={transaction.id}
            className={`p-5 ${index < recentTransactions.length - 1 ? 'border-b border-gray-100' : ''}`}>
            
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium text-gray-800">
                      {transaction.type === 'Transfer' ?
                  `Transfer to ${transaction.to}` :
                  transaction.payee}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                  className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                  
                      {transaction.amount > 0 ? '+' : '-'}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {transaction.from}
                    </div>
                  </div>
                </div>
              </div>
          )}
          </div>
        }
      </main>

      <BottomNavigation activeTab="accounts" />
    </div>);

}