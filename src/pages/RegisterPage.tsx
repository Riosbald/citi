import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ChevronLeftIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setIsLoading(true);
    try {
      await register(`${formData.firstName} ${formData.lastName}`, formData.email, formData.password);
      navigate('/verify-identity');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#2B6FD8] to-[#1E5BB8]">
      <div className="max-w-md mx-auto px-6 py-8">
        <button onClick={() => navigate('/login')} className="flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="text-sm">Back to Sign In</span>
        </button>

        <div className="text-center mb-8">
          <div className="relative inline-block mb-6 flex items-center justify-center">
            <img src="/citiredesign-footer_%281%29.svg" alt="Citi" className="h-16 sm:h-20 md:h-24" />
          </div>
          <h1 className="text-2xl font-light text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-white/80 text-sm">Join Citibank today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input id="firstName" type="text" value={formData.firstName} onChange={(e) => setFormData({
                ...formData,
                firstName: e.target.value
              })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input id="lastName" type="text" value={formData.lastName} onChange={(e) => setFormData({
                ...formData,
                lastName: e.target.value
              })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({
              ...formData,
              phone: e.target.value
            })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({
                ...formData,
                password: e.target.value
              })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={(e) => setFormData({
                ...formData,
                confirmPassword: e.target.value
              })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all pr-12" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4 text-[#003B6F] border-gray-300 rounded focus:ring-[#003B6F] mt-1" required />
              <label htmlFor="terms" className="text-xs text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-[#003B6F] hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#003B6F] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>;
}