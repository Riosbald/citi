import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, FilterIcon, SearchIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { useTransactions } from '../contexts/TransactionContext';
export function PaymentActivityPage() {
  const navigate = useNavigate();
  const {
    transactions
  } = useTransactions();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTransactions = transactions.filter((transaction) => {
    const searchLower = searchTerm.toLowerCase();
    return transaction.type.toLowerCase().includes(searchLower) || transaction.payee?.toLowerCase().includes(searchLower) || transaction.from?.toLowerCase().includes(searchLower) || transaction.to?.toLowerCase().includes(searchLower) || transaction.confirmationNumber.toLowerCase().includes(searchLower);
  });
  return <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <button onClick={() => navigate('/payments')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-4 sm:mb-6 -ml-1 px-1 py-1">
          <ChevronLeftIcon className="w-4 h-4" strokeWidth={2} />
          Back to Payments
        </button>

        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Payment Activity
        </h1>

        <div className="mb-5 sm:mb-6 space-y-3">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search transactions..." className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <FilterIcon className="w-4 h-4" strokeWidth={2} />
            <span>Filter</span>
          </button>
        </div>

        {filteredTransactions.length === 0 ? <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-sm sm:text-base text-gray-500">
              No transactions found
            </p>
          </div> : <div className="space-y-3">
            {filteredTransactions.map((transaction) => <div key={transaction.id} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1 truncate">
                      {transaction.type}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {transaction.type === 'Transfer' ? `${transaction.from} → ${transaction.to}` : transaction.payee}
                    </p>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <p className={`text-base sm:text-lg font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                      {transaction.amount > 0 ? '+' : '-'}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${transaction.status === 'Completed' ? 'bg-green-100 text-green-700' : transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <span>
                    {new Date(transaction.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
                  </span>
                  <span className="font-mono">
                    {transaction.confirmationNumber}
                  </span>
                </div>
              </div>)}
          </div>}
      </main>
    </div>;
}