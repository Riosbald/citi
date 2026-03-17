import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TransactionProvider } from './contexts/TransactionContext';
import { ProtectedRoute } from './components/ProtectedRoute';
// Eager load critical pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { AccountsPage } from './pages/AccountsPage';
// Lazy load InstallPrompt
const InstallPrompt = lazy(() => import('./components/InstallPrompt').then((m) => ({
  default: m.InstallPrompt
})));
// Lazy load non-critical pages for better performance
const RegisterPage = lazy(() => import('./pages/RegisterPage').then((m) => ({
  default: m.RegisterPage
})));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage').then((m) => ({
  default: m.ForgotPasswordPage
})));
const VerifyIdentityPage = lazy(() => import('./pages/VerifyIdentityPage').then((m) => ({
  default: m.VerifyIdentityPage
})));
const SpendingCategoriesPage = lazy(() => import('./pages/SpendingCategoriesPage').then((m) => ({
  default: m.SpendingCategoriesPage
})));
const AccountDetailPage = lazy(() => import('./pages/AccountDetailPage').then((m) => ({
  default: m.AccountDetailPage
})));
const PaymentsPage = lazy(() => import('./pages/PaymentsPage').then((m) => ({
  default: m.PaymentsPage
})));
const PayBillsPage = lazy(() => import('./pages/PayBillsPage').then((m) => ({
  default: m.PayBillsPage
})));
const TransferMoneyPage = lazy(() => import('./pages/TransferMoneyPage').then((m) => ({
  default: m.TransferMoneyPage
})));
const PaymentConfirmationPage = lazy(() => import('./pages/PaymentConfirmationPage').then((m) => ({
  default: m.PaymentConfirmationPage
})));
const PaymentSuccessPage = lazy(() => import('./pages/PaymentSuccessPage').then((m) => ({
  default: m.PaymentSuccessPage
})));
const PaymentActivityPage = lazy(() => import('./pages/PaymentActivityPage').then((m) => ({
  default: m.PaymentActivityPage
})));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({
  default: m.ServicesPage
})));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((m) => ({
  default: m.ProfilePage
})));
const AccountSettingsPage = lazy(() => import('./pages/AccountSettingsPage').then((m) => ({
  default: m.AccountSettingsPage
})));
const PreferencesPage = lazy(() => import('./pages/PreferencesPage').then((m) => ({
  default: m.PreferencesPage
})));
const AlertsPage = lazy(() => import('./pages/AlertsPage').then((m) => ({
  default: m.AlertsPage
})));
const SecuritySettingsPage = lazy(() => import('./pages/SecuritySettingsPage').then((m) => ({
  default: m.SecuritySettingsPage
})));
const ChangePasswordPage = lazy(() => import('./pages/ChangePasswordPage').then((m) => ({
  default: m.ChangePasswordPage
})));
const FindLocationsPage = lazy(() => import('./pages/FindLocationsPage').then((m) => ({
  default: m.FindLocationsPage
})));
const HelpSupportPage = lazy(() => import('./pages/HelpSupportPage').then((m) => ({
  default: m.HelpSupportPage
})));
// Loading fallback component
const LoadingFallback = () => <div className="min-h-screen flex items-center justify-center bg-gray-50" role="status" aria-live="polite">
    <div className="text-center">
      <div className="inline-block w-12 h-12 border-4 border-[#003B6F] border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
      <p className="mt-4 text-gray-600 text-sm">Loading...</p>
    </div>
  </div>;
export function App() {
  return <AuthProvider>
      <TransactionProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/verify-identity" element={<VerifyIdentityPage />} />

              <Route path="/spending" element={<ProtectedRoute>
                    <SpendingCategoriesPage />
                  </ProtectedRoute>} />
              <Route path="/accounts" element={<ProtectedRoute>
                    <AccountsPage />
                  </ProtectedRoute>} />
              <Route path="/account-detail" element={<ProtectedRoute>
                    <AccountDetailPage />
                  </ProtectedRoute>} />

              <Route path="/payments" element={<ProtectedRoute>
                    <PaymentsPage />
                  </ProtectedRoute>} />
              <Route path="/payments/bills" element={<ProtectedRoute>
                    <PayBillsPage />
                  </ProtectedRoute>} />
              <Route path="/payments/transfer" element={<ProtectedRoute>
                    <TransferMoneyPage />
                  </ProtectedRoute>} />
              <Route path="/payment-confirmation" element={<ProtectedRoute>
                    <PaymentConfirmationPage />
                  </ProtectedRoute>} />
              <Route path="/payment-success" element={<ProtectedRoute>
                    <PaymentSuccessPage />
                  </ProtectedRoute>} />
              <Route path="/payments/activity" element={<ProtectedRoute>
                    <PaymentActivityPage />
                  </ProtectedRoute>} />

              <Route path="/services" element={<ProtectedRoute>
                    <ServicesPage />
                  </ProtectedRoute>} />
              <Route path="/services/settings" element={<ProtectedRoute>
                    <AccountSettingsPage />
                  </ProtectedRoute>} />
              <Route path="/services/alerts" element={<ProtectedRoute>
                    <AlertsPage />
                  </ProtectedRoute>} />
              <Route path="/services/security" element={<ProtectedRoute>
                    <SecuritySettingsPage />
                  </ProtectedRoute>} />
              <Route path="/services/password" element={<ProtectedRoute>
                    <ChangePasswordPage />
                  </ProtectedRoute>} />
              <Route path="/services/locations" element={<ProtectedRoute>
                    <FindLocationsPage />
                  </ProtectedRoute>} />
              <Route path="/services/help" element={<ProtectedRoute>
                    <HelpSupportPage />
                  </ProtectedRoute>} />

              <Route path="/profile" element={<ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>} />
              <Route path="/profile/preferences" element={<ProtectedRoute>
                    <PreferencesPage />
                  </ProtectedRoute>} />
            </Routes>
            <InstallPrompt />
          </Suspense>
        </BrowserRouter>
      </TransactionProvider>
    </AuthProvider>;
}