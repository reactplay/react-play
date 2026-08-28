import { useState } from 'react';
import { CATEGORIES } from '../constants/categories';

const defaultForm = {
  type: 'expense',
  amount: '',
  category: '',
  description: '',
  date: new Date().toISOString().split('T')[0]
};

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'type' ? { category: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || isNaN(form.amount) || parseFloat(form.amount) <= 0)
      return setError('Please enter a valid amount.');
    if (!form.category) return setError('Please select a category.');
    if (!form.description.trim()) return setError('Please enter a description.');
    setError('');
    onAdd(form);
    setForm({ ...defaultForm, type: form.type });
  };

  const currentCategories = CATEGORIES[form.type];
  const inputClass =
    'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 transition-colors';

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
      <h2 className="font-bold text-gray-700 mb-3">Add Transaction</h2>
      <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-3">
        {['expense', 'income'].map((type) => (
          <button
            className={`flex-1 py-2 text-sm font-semibold capitalize transition-colors ${
              form.type === type
                ? type === 'expense'
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
                : 'bg-gray-50 text-gray-500'
            }`}
            key={type}
            type="button"
            onClick={() => setForm({ ...defaultForm, type })}
          >
            {type === 'expense' ? 'Expense' : 'Income'}
          </button>
        ))}
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Amount</label>
            <input
              className={inputClass}
              min="0"
              name="amount"
              placeholder="0.00"
              step="0.01"
              type="number"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Date</label>
            <input
              className={inputClass}
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Category</label>
          <div className="flex flex-wrap gap-1.5">
            {currentCategories.map((cat) => (
              <button
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  form.category === cat.id
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
                key={cat.id}
                type="button"
                onClick={() => setForm((p) => ({ ...p, category: cat.id }))}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Description</label>
          <input
            className={inputClass}
            name="description"
            placeholder="What was this for?"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
