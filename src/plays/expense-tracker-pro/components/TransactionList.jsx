import { formatCurrency, formatDate } from '../utils/format';
import { getCategoryMeta } from '../constants/categories';

const TransactionList = ({
  transactions,
  onDelete,
  filterType,
  setFilterType,
  filterMonth,
  setFilterMonth,
  availableMonths
}) => {
  const selectClass =
    'border border-gray-200 text-sm rounded-lg px-2 py-1.5 outline-none focus:border-blue-400 bg-white';

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h2 className="font-bold text-gray-700">Transactions ({transactions.length})</h2>
        <div className="flex gap-2 flex-wrap">
          <select
            className={selectClass}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select
            className={selectClass}
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          >
            <option value="all">All Months</option>
            {availableMonths.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
      {transactions.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p className="text-4xl mb-2">📭</p>
          <p className="text-sm">No transactions yet. Add one above!</p>
        </div>
      ) : (
        <div className="space-y-2 max-h-72 overflow-y-auto">
          {transactions.map((t) => {
            const meta = getCategoryMeta(t.category);

            return (
              <div
                className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                key={t.id}
              >
                <span className="text-xl">{meta.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{t.description}</p>
                  <p className="text-xs text-gray-400">
                    {meta.label} · {formatDate(t.date)}
                  </p>
                </div>
                <span
                  className={`font-bold text-sm ${t.type === 'income' ? 'text-green-600' : 'text-red-500'}`}
                >
                  {t.type === 'income' ? '+' : '-'}
                  {formatCurrency(t.amount)}
                </span>
                <button
                  className="text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-lg leading-none"
                  onClick={() => onDelete(t.id)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
