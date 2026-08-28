import { useState, useEffect, useMemo } from 'react';

const STORAGE_KEY = 'expense_tracker_pro_transactions';

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState(loadFromStorage);
  const [filterType, setFilterType] = useState('all');
  const [filterMonth, setFilterMonth] = useState('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => {
    const newTransaction = {
      id: generateId(),
      ...data,
      amount: parseFloat(data.amount),
      date: data.date || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const clearAll = () => setTransactions([]);

  const summary = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return { income, expense, balance: income - expense };
  }, [transactions]);

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      const matchType = filterType === 'all' || t.type === filterType;
      const matchMonth = filterMonth === 'all' || t.date.startsWith(filterMonth);

      return matchType && matchMonth;
    });
  }, [transactions, filterType, filterMonth]);

  const chartData = useMemo(() => {
    const expenseMap = {};
    transactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        expenseMap[t.category] = (expenseMap[t.category] || 0) + t.amount;
      });

    return Object.entries(expenseMap).map(([category, amount]) => ({
      category,
      amount: parseFloat(amount.toFixed(2))
    }));
  }, [transactions]);

  const monthlyData = useMemo(() => {
    const map = {};
    transactions.forEach((t) => {
      const month = t.date.slice(0, 7);
      if (!map[month]) map[month] = { month, income: 0, expense: 0 };
      map[month][t.type] += t.amount;
    });

    return Object.values(map).sort((a, b) => a.month.localeCompare(b.month));
  }, [transactions]);

  const availableMonths = useMemo(() => {
    const months = [...new Set(transactions.map((t) => t.date.slice(0, 7)))];

    return months.sort((a, b) => b.localeCompare(a));
  }, [transactions]);

  return {
    transactions,
    filtered,
    summary,
    chartData,
    monthlyData,
    availableMonths,
    filterType,
    setFilterType,
    filterMonth,
    setFilterMonth,
    addTransaction,
    deleteTransaction,
    clearAll
  };
};

export default useTransactions;
