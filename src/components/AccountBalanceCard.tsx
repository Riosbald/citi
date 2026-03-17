import React from 'react';
import { HelpCircleIcon } from 'lucide-react';
export function AccountBalanceCard() {
  const availableDollars = 232761;
  const availableCents = '23';
  const depositDollars = 232761;
  const depositCents = '23';
  const avgBalance = 232761.23;
  return (
    <div className="bg-gradient-to-br from-[#2B5F8F] to-[#1A4A6F] text-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[17px] font-light mb-6 leading-snug">
        The Citibank Account
        <br />
        Checking - 2847
      </h2>

      <div className="space-y-5">
        {/* Available Balance */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] text-white/90 font-normal">
              Available Balance
            </span>
            <HelpCircleIcon className="w-4 h-4 text-white/60" strokeWidth={2} />
          </div>
          <div className="flex items-start gap-0.5">
            <span className="text-[48px] font-light tracking-tight leading-none">
              ${availableDollars.toLocaleString()}
            </span>
            <span className="text-[24px] font-light leading-none pt-1">
              .{availableCents}
            </span>
          </div>
        </div>

        {/* On Deposit */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] text-white/90 font-normal">
              On Deposit
            </span>
            <HelpCircleIcon className="w-4 h-4 text-white/60" strokeWidth={2} />
          </div>
          <div className="flex items-start gap-0.5">
            <span className="text-[24px] font-light leading-none">
              ${depositDollars.toLocaleString()}
            </span>
            <span className="text-[14px] font-light leading-none pt-0.5">
              .{depositCents}
            </span>
          </div>
        </div>

        {/* Average Monthly Balance */}
        <div className="flex items-center gap-2 text-[13px] text-white/90 pt-2">
          <span className="font-normal">
            Average Monthly Balance: ${avgBalance.toLocaleString()}
          </span>
          <HelpCircleIcon className="w-4 h-4 text-white/60" strokeWidth={2} />
        </div>
      </div>
    </div>);

}