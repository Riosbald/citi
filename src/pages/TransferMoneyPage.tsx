import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronDownIcon } from 'lucide-react';
import { Header } from '../components/Header';
// Format number with comma as decimal separator
const formatNumberWithComma = (value: string): string => {
  // Remove any existing formatting
  const cleaned = value.replace(/[^\d.]/g, '');
  // Replace period with comma for display
  return cleaned.replace('.', ',');
};
// Convert comma format back to standard decimal for submission
const parseCommaNumber = (value: string): string => {
  return value.replace(',', '.');
};
export function TransferMoneyPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromAccount: 'checking-234',
    toAccount: '',
    amount: '',
    memo: ''
  });
  const accounts = [
  {
    id: 'checking-234',
    name: 'Interest Checking',
    number: '234',
    balance: 232761.23
  },
  {
    id: 'savings-782',
    name: 'Savings Plus',
    number: '782',
    balance: 28584.23
  }];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow numbers, comma, and period
    const filtered = value.replace(/[^\d.,]/g, '');
    setFormData({
      ...formData,
      amount: filtered
    });
  };
  const handleAmountBlur = () => {
    if (formData.amount) {
      // Format with comma on blur
      const formatted = formatNumberWithComma(formData.amount);
      setFormData({
        ...formData,
        amount: formatted
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert comma to period for processing
    const processedAmount = parseCommaNumber(formData.amount);
    navigate('/payment-confirmation', {
      state: {
        type: 'transfer',
        ...formData,
        amount: processedAmount
      }
    });
  };
  const selectedFromAccount = accounts.find(
    (acc) => acc.id === formData.fromAccount
  );
  const availableToAccounts = accounts.filter(
    (acc) => acc.id !== formData.fromAccount
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <button
          onClick={() => navigate('/payments')}
          className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-4 sm:mb-6 -ml-1 px-1 py-1">
          
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Payments
        </button>

        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Transfer Money
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  From Account
                </label>
                <div className="relative">
                  <select
                    value={formData.fromAccount}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      fromAccount: e.target.value,
                      toAccount: ''
                    })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none appearance-none bg-white transition-all">
                    
                    {accounts.map((account) =>
                    <option key={account.id} value={account.id}>
                        {account.name} {account.number}
                      </option>
                    )}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                </div>
                {selectedFromAccount &&
                <p className="text-xs text-gray-600 mt-1.5 sm:mt-2 font-medium">
                    Available: $
                    {selectedFromAccount.balance.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                  </p>
                }
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  To Account
                </label>
                <div className="relative">
                  <select
                    value={formData.toAccount}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      toAccount: e.target.value
                    })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none appearance-none bg-white transition-all"
                    required>
                    
                    <option value="">Select destination</option>
                    {availableToAccounts.map((account) =>
                    <option key={account.id} value={account.id}>
                        {account.name} {account.number}
                      </option>
                    )}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base sm:text-lg font-medium">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={formData.amount}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                    className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all"
                    placeholder="0,00"
                    required />
                  
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  Decimals automatically formatted with comma (e.g., 100,50)
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Memo (Optional)
                </label>
                <input
                  type="text"
                  value={formData.memo}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    memo: e.target.value
                  })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all"
                  placeholder="Add a note" />
                
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#003B6F] text-white py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors shadow-sm">
            
            Continue
          </button>
        </form>
      </main>
    </div>);

}