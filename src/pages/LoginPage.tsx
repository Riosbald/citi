import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from '../components/Logo';
export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    // Strict authentication
    if (formData.userId === '236182916' && formData.password === 'qwertyui') {
      try {
        await login(formData.userId, formData.password);
        navigate('/accounts');
      } catch (err) {
        setError('Authentication failed. Please try again.');
      }
    } else {
      setError('Invalid User ID or Password. Please try again.');
    }
    setIsLoading(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B6FD8] to-[#1E5BB8] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo className="mb-6" />
            <h1 className="text-2xl font-light text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-white/80 text-sm">
              Sign in to access your accounts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error &&
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              }

              <div>
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  User ID
                </label>
                <input
                  id="userId"
                  type="text"
                  value={formData.userId}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    userId: e.target.value
                  })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your User ID"
                  required />
                
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value
                    })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all pr-12"
                    placeholder="Enter your password"
                    required />
                  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    
                    {showPassword ?
                    <EyeOffIcon className="w-5 h-5" /> :

                    <EyeIcon className="w-5 h-5" />
                    }
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#003B6F] border-gray-300 rounded focus:ring-[#003B6F]" />
                  
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[#003B6F] hover:underline font-medium transition-colors">
                  
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#003B6F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-[#003B6F] hover:underline font-medium transition-colors">
                  
                  Register Now
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/70 text-xs">
              © {new Date().getFullYear()} Citibank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>);

}