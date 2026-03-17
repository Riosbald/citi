import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheckIcon } from 'lucide-react';
export function VerifyIdentityPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/accounts');
  };
  const handleResend = async () => {
    setError('');
    // Simulate resend
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert('Verification code resent!');
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#2B6FD8] to-[#1E5BB8] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="flex items-center justify-center gap-1">
              <span className="text-white text-4xl font-light">citi</span>
              <span className="text-white text-4xl font-normal">bank</span>
            </div>
            <div className="absolute -top-2 left-[50%] transform -translate-x-1/2">
              <svg width="50" height="25" viewBox="0 0 60 30" fill="none">
                <path d="M5 25 Q 30 -5, 55 25" stroke="#DC143C" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-light text-white mb-2">
            Verify Your Identity
          </h1>
          <p className="text-white/80 text-sm">
            Enter the 6-digit code sent to your phone
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#003B6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-[#003B6F]" />
            </div>
            <p className="text-sm text-gray-600">
              We've sent a verification code to
              <br />
              <strong>•••• •••• 4567</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm text-center">
                {error}
              </div>}

            <div className="flex gap-2 justify-center">
              {code.map((digit, index) => <input key={index} ref={(el) => inputRefs.current[index] = el} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={(e) => handleChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-[#003B6F] outline-none transition-all" />)}
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Verifying...' : 'Verify'}
            </button>

            <div className="text-center">
              <button type="button" onClick={handleResend} className="text-sm text-[#003B6F] hover:underline">
                Didn't receive the code? Resend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}