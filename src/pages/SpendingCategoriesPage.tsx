import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';
export function SpendingCategoriesPage() {
  const categories = [{
    name: 'Restaurants',
    icon: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-9h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v7c0 1.1.9 2 2 2h2m14-9v18" />
        </svg>,
    amount: -371.16,
    lastMonth: -360.97
  }, {
    name: 'Shopping',
    icon: () => <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>,
    amount: -39.24,
    lastMonth: -242.59
  }, {
    name: 'Health & Pharmacy',
    icon: () => <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <ellipse cx="12" cy="12" rx="5" ry="8" />
        </svg>,
    amount: -19.06,
    lastMonth: -0.0
  }, {
    name: 'Housing',
    icon: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
        </svg>,
    amount: -0.0,
    lastMonth: -111.72
  }, {
    name: 'Personal Care & Fitness',
    icon: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3m15 0h-3m-9 0h6m-3-9v3m0 15v-3" />
          <circle cx="7" cy="12" r="2" />
          <circle cx="17" cy="12" r="2" />
        </svg>,
    amount: -0.0,
    lastMonth: -80.0
  }, {
    name: 'Groceries',
    icon: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>,
    amount: -0.0,
    lastMonth: -72.31
  }];
  const totalDollars = 429;
  const totalCents = 46;
  return <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-[#003B6F] text-white px-4 py-3">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <button className="p-1" aria-label="Back">
            <ChevronLeftIcon className="w-6 h-6" strokeWidth={2} />
          </button>
          <h1 className="text-[17px] font-normal">Spending Categories</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Total spend card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 text-center">
          <p className="text-[13px] text-gray-600 mb-2 font-normal">
            Your total spend for October is
          </p>
          <div className="flex items-start justify-center gap-0.5 mb-3">
            <span className="text-[13px] text-gray-800 font-normal pt-1">
              $
            </span>
            <span className="text-[56px] font-light text-gray-800 leading-none">
              {totalDollars}
            </span>
            <span className="text-[28px] font-light text-gray-800 leading-none pt-1">
              .{totalCents}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 font-normal">
            Last month you spent $945.83
          </p>
        </div>

        {/* Categories list */}
        <div className="space-y-0 bg-white rounded-lg overflow-hidden shadow-sm">
          {categories.map((category, index) => {
          const Icon = category.icon;
          return <div key={index} className="px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                    <Icon />
                  </div>
                  <span className="text-gray-800 font-normal text-[15px]">
                    {category.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-gray-800 font-normal text-[15px]">
                    {category.amount < 0 ? '-' : ''}$
                    {Math.abs(category.amount).toFixed(2)}
                  </div>
                  <div className="text-[11px] text-gray-500 font-normal">
                    {category.lastMonth < 0 ? '-' : ''}$
                    {Math.abs(category.lastMonth).toFixed(2)} last mo.
                  </div>
                </div>
              </div>;
        })}
        </div>
      </main>

      <BottomNavigation activeTab="accounts" />
    </div>;
}