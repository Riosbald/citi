import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export function LandingPage() {
  const navigate = useNavigate();
  const {
    isAuthenticated
  } = useAuth();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate('/accounts');
      } else {
        navigate('/login');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate, isAuthenticated]);
  return <div className="min-h-screen bg-gradient-to-b from-[#2B6FD8] to-[#1E5BB8] flex flex-col items-center justify-between px-8 py-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl sm:text-2xl font-light mb-8 tracking-wide">
            Welcome to
          </p>
          <div className="relative flex items-center justify-center">
            <img src="/logo.svg" alt="Citibank" className="h-20 sm:h-24 md:h-28" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-white text-base sm:text-lg font-medium mb-2">
          100% Safe & Secure
        </p>
        <p className="text-white/70 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Citibank. All rights reserved.
        </p>
      </div>
    </div>;
}