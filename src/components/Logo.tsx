import React from 'react';
export function Logo({
  className


}: {className?: string;}) {
  return <div className={`relative inline-block ${className}`}>
      <div className="flex items-center justify-center gap-1">
        <span className="text-white text-4xl font-light">citi</span>
        <span className="text-white text-4xl font-normal">bank</span>
      </div>
      <div className="absolute -top-2 left-[50%] transform -translate-x-1/2">
        <svg width="50" height="25" viewBox="0 0 60 30" fill="none">
          <path d="M5 25 Q 30 -5, 55 25" stroke="#DC143C" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>;
}