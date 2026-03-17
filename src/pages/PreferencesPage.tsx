import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function PreferencesPage() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsAlerts: false,
    pushNotifications: true,
    marketingEmails: false,
    biometricLogin: true,
    darkMode: false
  });
  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <button onClick={() => navigate('/profile')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-6">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Profile
        </button>

        <h1 className="text-2xl font-light text-gray-800 mb-6">Preferences</h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500">
                    Receive account updates via email
                  </p>
                </div>
                <button onClick={() => handleToggle('emailNotifications')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.emailNotifications ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    SMS Alerts
                  </p>
                  <p className="text-xs text-gray-500">
                    Get text messages for important updates
                  </p>
                </div>
                <button onClick={() => handleToggle('smsAlerts')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.smsAlerts ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.smsAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Push Notifications
                  </p>
                  <p className="text-xs text-gray-500">
                    Receive mobile app notifications
                  </p>
                </div>
                <button onClick={() => handleToggle('pushNotifications')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.pushNotifications ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.pushNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Marketing Emails
                  </p>
                  <p className="text-xs text-gray-500">
                    Receive promotional offers
                  </p>
                </div>
                <button onClick={() => handleToggle('marketingEmails')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.marketingEmails ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.marketingEmails ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Security & Display */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Security & Display
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Biometric Login
                  </p>
                  <p className="text-xs text-gray-500">
                    Use fingerprint or face ID
                  </p>
                </div>
                <button onClick={() => handleToggle('biometricLogin')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.biometricLogin ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.biometricLogin ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">Dark Mode</p>
                  <p className="text-xs text-gray-500">Use dark theme</p>
                </div>
                <button onClick={() => handleToggle('darkMode')} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.darkMode ? 'bg-[#003B6F]' : 'bg-gray-300'}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="profile" />
    </div>;
}