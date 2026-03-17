import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: {children: ReactNode;}) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('isAuthenticated');
    return stored === 'true';
  });
  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  // Persist auth state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', String(isAuthenticated));
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [isAuthenticated, user]);
  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAuthenticated(true);
    setUser({
      name: 'Jacqueline Brooks',
      email
    });
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };
  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAuthenticated(true);
    setUser({
      name,
      email
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        register
      }}>
      
      {children}
    </AuthContext.Provider>);

}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}