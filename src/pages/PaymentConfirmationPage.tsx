import React, { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeftIcon, AlertCircleIcon } from 'lucide-react';
import { Header } from '../components/Header';
export function PaymentConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location.state || {};
  const accounts = [{
    id: 'checking-234',
    name: 'Interest Checking 234'
  }, {
    id: 'savings-782',
    name: 'Savings Plus Account 782'
  }];
  const getAccountName = (id: string) => {
    return accounts.find((acc) => acc.id === id)?.name || id;
  };
  const handleConfirm = () => {
    navigate('/payment-success', {
      state: paymentData
    });
  };
  return <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-4 sm:mb-6 -ml-1 px-1 py-1">
          <ChevronLeftIcon className="w-4 h-4" strokeWidth={2} />
          Back
        </button>

        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Confirm Payment
        </h1>

        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm mb-5 sm:mb-6">
          <div className="text-center mb-6 pb-6 border-b border-gray-100">
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Amount</p>
            <p className="text-3xl sm:text-4xl font-light text-[#003B6F]">
              $
              {parseFloat(paymentData.amount || 0).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-600">From</span>
              <span className="font-medium text-gray-800 text-right">
                {getAccountName(paymentData.fromAccount)}
              </span>
            </div>

            {paymentData.type === 'transfer' ? <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">To</span>
                <span className="font-medium text-gray-800 text-right">
                  {getAccountName(paymentData.toAccount)}
                </span>
              </div> : <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Payee</span>
                <span className="font-medium text-gray-800 text-right">
                  {paymentData.payee}
                </span>
              </div>}

            {paymentData.memo && <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Memo</span>
                <span className="font-medium text-gray-800 text-right">
                  {paymentData.memo}
                </span>
              </div>}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 flex gap-3">
          <AlertCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <div>
            <p className="text-xs sm:text-sm text-amber-800 font-medium mb-1">
              Review your payment
            </p>
            <p className="text-xs sm:text-sm text-amber-700">
              Please verify all details before confirming. This action cannot be
              undone.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button onClick={handleConfirm} className="w-full bg-[#003B6F] text-white py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors shadow-sm">
            Confirm Payment
          </button>
          <button onClick={() => navigate(-1)} className="w-full bg-white text-gray-700 py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base font-medium border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            Cancel
          </button>
        </div>
      </main>
    </div>;
}