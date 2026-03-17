import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { AccountBalanceCard } from '../components/AccountBalanceCard';
import { AccountInformationCard } from '../components/AccountInformationCard';
export function AccountDetailPage() {
  return <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-md mx-auto px-4 py-4 sm:py-6">
        <Link to="/accounts" className="flex items-center gap-1 text-[#003B6F] text-sm font-medium hover:opacity-80 transition-opacity mb-4 sm:mb-6 -ml-1 px-1 py-1">
          <ChevronLeftIcon className="w-4 h-4" strokeWidth={2.5} />
          Back to Citi Summary
        </Link>

        <div className="text-center mb-8">
          <img src="/logo.svg" alt="Citi" className="w-32 mx-auto mb-6" />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <AccountBalanceCard />
          <AccountInformationCard />
        </div>
      </main>
    </div>;
}