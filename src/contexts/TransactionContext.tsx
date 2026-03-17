import React, { useEffect, useState, createContext, useContext, memo, ReactNode } from 'react';
export interface Transaction {
  id: string;
  type: 'Bill Payment' | 'Transfer';
  payee?: string;
  from?: string;
  to?: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
  confirmationNumber: string;
  memo?: string;
}
interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date' | 'confirmationNumber' | 'status'>) => void;
}
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);
export function TransactionProvider({
  children


}: {children: ReactNode;}) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);
  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date' | 'confirmationNumber' | 'status'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      confirmationNumber: `PAY${Date.now().toString().slice(-8)}`,
      status: 'Completed'
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };
  return <TransactionContext.Provider value={{
    transactions,
    addTransaction
  }}>
      {children}
    </TransactionContext.Provider>;
}
export function useTransactions() {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
}