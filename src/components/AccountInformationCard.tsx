import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
export function AccountInformationCard() {
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const transactions = [
  {
    id: 1,
    name: 'Salary Deposit - Direct Deposit',
    date: '03/14/2026',
    amount: 32000.0
  },
  {
    id: 2,
    name: 'Interest Charge - Credit Card',
    date: '02/28/2026',
    amount: -45.67
  },
  {
    id: 3,
    name: 'Monthly Maintenance Fee',
    date: '02/28/2026',
    amount: -12.0
  },
  {
    id: 4,
    name: 'Amazon.com Purchase',
    date: '03/05/2026',
    amount: -156.42
  }];

  return (
    <div className="bg-white rounded-2xl shadow-sm">
      {/* Account Information Section */}
      <div className="p-5 sm:p-6 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-5">
          Account Information
        </h3>

        <div className="space-y-5">
          {/* Account Number */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 mb-2">
              Account Number
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-gray-900 font-normal tracking-wide">
                {showAccountNumber ? '78492847' : '******2847'}
              </span>
              <button
                onClick={() => setShowAccountNumber(!showAccountNumber)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={
                showAccountNumber ?
                'Hide account number' :
                'Show account number'
                }>
                
                {showAccountNumber ?
                <EyeOffIcon
                  className="w-4 h-4 text-gray-500"
                  strokeWidth={2} /> :


                <EyeIcon className="w-4 h-4 text-gray-500" strokeWidth={2} />
                }
              </button>
            </div>
          </div>

          {/* Routing Number */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 mb-2">
              Routing Number
            </div>
            <div className="text-[15px] text-gray-900 font-normal tracking-wide">
              021000089
            </div>
          </div>

          {/* Enrolled in */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 mb-2">
              Enrolled in
            </div>
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-[#003B6F] text-[13px] font-medium rounded-full">
              Direct Deposit
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Recent Transactions
        </h3>

        <div className="space-y-3">
          {transactions.map((transaction) =>
          <div
            key={transaction.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            
              <div className="flex-1 min-w-0">
                <div className="text-[15px] text-gray-900 font-normal truncate">
                  {transaction.name}
                </div>
                <div className="text-[13px] text-gray-500 mt-0.5">
                  {transaction.date}
                </div>
              </div>
              <div
              className={`text-[15px] font-semibold ml-4 flex-shrink-0 ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
              
                {transaction.amount > 0 ? '+' : ''}
                {transaction.amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}