import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, ArrowRightLeftIcon, ClockIcon, ChevronRightIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function PaymentsPage() {
  const quickActions = [{
    icon: CreditCardIcon,
    title: 'Pay Bills',
    description: 'Pay your bills quickly',
    href: '/payments/bills',
    color: 'bg-blue-50 text-blue-600'
  }, {
    icon: ArrowRightLeftIcon,
    title: 'Transfer Money',
    description: 'Between your accounts',
    href: '/payments/transfer',
    color: 'bg-green-50 text-green-600'
  }, {
    icon: ClockIcon,
    title: 'Payment Activity',
    description: 'View transaction history',
    href: '/payments/activity',
    color: 'bg-purple-50 text-purple-600'
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Payments
        </h1>

        <div className="space-y-3 sm:space-y-4">
          {quickActions.map((action, index) => {
          const Icon = action.icon;
          return <Link key={index} to={action.href} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all block">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${action.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-0.5">
                      {action.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
                </div>
              </Link>;
        })}
        </div>

        <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-medium text-blue-900 mb-2">
            Quick Tip
          </h3>
          <p className="text-xs sm:text-sm text-blue-800">
            Set up automatic payments to never miss a due date. Manage your
            scheduled payments in Payment Activity.
          </p>
        </div>
      </main>

      <BottomNavigation activeTab="payments" />
    </div>;
}