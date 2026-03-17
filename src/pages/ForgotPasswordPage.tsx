import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, MailIcon } from 'lucide-react';
export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#2B6FD8] to-[#1E5BB8]">
      <div className="max-w-md mx-auto px-6 py-8">
        <button onClick={() => navigate('/login')} className="flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="text-sm">Back to Sign In</span>
        </button>

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
            Forgot Password?
          </h1>
          <p className="text-white/80 text-sm">We'll help you reset it</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          {!isSubmitted ? <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#003B6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-8 h-8 text-[#003B6F]" />
                </div>
                <p className="text-sm text-gray-600">
                  Enter your email address and we'll send you instructions to
                  reset your password.
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" placeholder="Enter your email" required />
              </div>

              <button type="submit" disabled={isLoading} className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form> : <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Check Your Email
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                We've sent password reset instructions to{' '}
                <strong>{email}</strong>
              </p>
              <button onClick={() => navigate('/login')} className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] transition-colors">
                Back to Sign In
              </button>
              <button onClick={() => setIsSubmitted(false)} className="w-full mt-3 text-[#003B6F] py-2 text-sm hover:underline">
                Didn't receive the email? Resend
              </button>
            </div>}
        </div>
      </div>
    </div>;
}