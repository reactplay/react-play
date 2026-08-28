import { formatCurrency } from '../utils/format';

const SummaryCards = ({ summary }) => {
  const { income, expense, balance } = summary;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
      <div
        className={`rounded-xl p-4 border ${balance >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
      >
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Balance</p>
        <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {formatCurrency(balance)}
        </p>
      </div>
      <div className="rounded-xl p-4 border bg-blue-50 border-blue-200">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Income</p>
        <p className="text-2xl font-bold text-blue-600">{formatCurrency(income)}</p>
      </div>
      <div className="rounded-xl p-4 border bg-orange-50 border-orange-200">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Expenses</p>
        <p className="text-2xl font-bold text-orange-600">{formatCurrency(expense)}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
