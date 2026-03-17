import React, { useEffect, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircleIcon, DownloadIcon, ShareIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { useTransactions } from '../contexts/TransactionContext';
export function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location.state || {};
  const {
    addTransaction
  } = useTransactions();
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
  const confirmationNumber = `PAY${Date.now().toString().slice(-8)}`;
  // Add transaction to history
  useEffect(() => {
    if (paymentData.amount) {
      addTransaction({
        type: paymentData.type === 'bill' ? 'Bill Payment' : 'Transfer',
        payee: paymentData.payee,
        from: getAccountName(paymentData.fromAccount),
        to: paymentData.type === 'transfer' ? getAccountName(paymentData.toAccount) : undefined,
        amount: parseFloat(paymentData.amount),
        memo: paymentData.memo
      });
    }
  }, []);
  return <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleIcon className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-light text-gray-800 mb-2">
            Payment Successful!
          </h1>
          <p className="text-sm text-gray-600">
            Your payment has been processed
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="text-center mb-6 pb-6 border-b border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
            <p className="text-4xl font-light text-[#003B6F]">
              ${parseFloat(paymentData.amount || 0).toFixed(2)}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confirmation Number</span>
              <span className="font-medium text-gray-800">
                {confirmationNumber}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">From</span>
              <span className="font-medium text-gray-800">
                {getAccountName(paymentData.fromAccount)}
              </span>
            </div>

            {paymentData.type === 'transfer' ? <div className="flex justify-between text-sm">
                <span className="text-gray-600">To</span>
                <span className="font-medium text-gray-800">
                  {getAccountName(paymentData.toAccount)}
                </span>
              </div> : <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payee</span>
                <span className="font-medium text-gray-800">
                  {paymentData.payee}
                </span>
              </div>}

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Date</span>
              <span className="font-medium text-gray-800">
                {new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
              </span>
            </div>

            {paymentData.memo && <div className="flex justify-between text-sm">
                <span className="text-gray-600">Memo</span>
                <span className="font-medium text-gray-800">
                  {paymentData.memo}
                </span>
              </div>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 bg-white text-gray-700 py-3 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <DownloadIcon className="w-5 h-5" />
            <span>Download</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-700 py-3 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        <div className="space-y-3">
          <button onClick={() => navigate('/accounts')} className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors">
            Back to Accounts
          </button>
          <button onClick={() => navigate('/payments')} className="w-full bg-white text-[#003B6F] py-3 px-4 rounded-lg font-medium border border-[#003B6F] hover:bg-blue-50 active:bg-blue-100 transition-colors">
            Make Another Payment
          </button>
        </div>
      </main>
    </div>;
}