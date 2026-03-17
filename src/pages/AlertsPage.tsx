import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function AlertsPage() {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState({
    largeTransactions: true,
    lowBalance: true,
    loginActivity: true,
    billReminders: false,
    accountChanges: true
  });
  const [thresholds, setThresholds] = useState({
    largeTransactionAmount: '500',
    lowBalanceAmount: '100'
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const handleToggle = (key: keyof typeof alerts) => {
    setAlerts((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
    showSuccessMessage();
  };
  const handleThresholdChange = (
  key: keyof typeof thresholds,
  value: string) =>
  {
    setThresholds((prev) => ({
      ...prev,
      [key]: value
    }));
  };
  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  const handleSaveThresholds = () => {
    showSuccessMessage();
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-4 sm:mb-6 -ml-1 px-1 py-1">
          
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Services
        </button>

        <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
          Account Alerts
        </h1>

        {/* Success Message */}
        {showSuccess &&
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-5 flex items-center gap-3 animate-fade-in">
            <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800 font-medium">
              Alert settings saved successfully!
            </p>
          </div>
        }

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-5">
          <p className="text-sm text-blue-800">
            Stay informed about your account activity with customizable alerts.
            Notifications will be sent to{' '}
            <strong>jacqueline.brooks@citibank.com</strong>
          </p>
        </div>

        {/* Transaction Alerts */}
        <div className="bg-white rounded-2xl shadow-sm mb-5">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">
              Transaction Alerts
            </h2>
          </div>

          <div className="p-5 space-y-5">
            {/* Large Transactions */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Large Transactions
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Get notified for transactions above threshold
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('largeTransactions')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alerts.largeTransactions ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alerts.largeTransactions ? 'translate-x-6' : 'translate-x-1'}`} />
                  
                </button>
              </div>
              {alerts.largeTransactions &&
              <div className="ml-0 mt-3">
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Alert threshold amount
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                    type="number"
                    value={thresholds.largeTransactionAmount}
                    onChange={(e) =>
                    handleThresholdChange(
                      'largeTransactionAmount',
                      e.target.value
                    )
                    }
                    onBlur={handleSaveThresholds}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none"
                    placeholder="500" />
                  
                  </div>
                </div>
              }
            </div>

            {/* Low Balance */}
            <div className="pt-5 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    Low Balance
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Alert when balance falls below threshold
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('lowBalance')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alerts.lowBalance ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alerts.lowBalance ? 'translate-x-6' : 'translate-x-1'}`} />
                  
                </button>
              </div>
              {alerts.lowBalance &&
              <div className="ml-0 mt-3">
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Minimum balance threshold
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                    type="number"
                    value={thresholds.lowBalanceAmount}
                    onChange={(e) =>
                    handleThresholdChange(
                      'lowBalanceAmount',
                      e.target.value
                    )
                    }
                    onBlur={handleSaveThresholds}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none"
                    placeholder="100" />
                  
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Security Alerts */}
        <div className="bg-white rounded-2xl shadow-sm mb-5">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">
              Security Alerts
            </h2>
          </div>

          <div className="p-5 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Login Activity
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Alert for new device logins
                </p>
              </div>
              <button
                onClick={() => handleToggle('loginActivity')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alerts.loginActivity ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alerts.loginActivity ? 'translate-x-6' : 'translate-x-1'}`} />
                
              </button>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Account Changes
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Alert for profile or settings changes
                </p>
              </div>
              <button
                onClick={() => handleToggle('accountChanges')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alerts.accountChanges ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alerts.accountChanges ? 'translate-x-6' : 'translate-x-1'}`} />
                
              </button>
            </div>
          </div>
        </div>

        {/* Payment Reminders */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">
              Payment Reminders
            </h2>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Bill Reminders
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Remind me of upcoming bills
                </p>
              </div>
              <button
                onClick={() => handleToggle('billReminders')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alerts.billReminders ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alerts.billReminders ? 'translate-x-6' : 'translate-x-1'}`} />
                
              </button>
            </div>
          </div>
        </div>

        {/* Active Alerts Summary */}
        <div className="mt-6 bg-gray-100 rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Active Alerts Summary
          </h3>
          <div className="space-y-2">
            {Object.entries(alerts).
            filter(([_, value]) => value).
            map(([key, _]) =>
            <div
              key={key}
              className="flex items-center gap-2 text-xs text-gray-700">
              
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
            )}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>);

}