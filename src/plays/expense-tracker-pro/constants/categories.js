import { getCategoryMeta, CHART_COLORS } from '../constants/categories';
import { formatCurrency, getMonthLabel } from '../utils/format';

const ExpenseChart = ({ data }) => {
  if (!data.length)
    return (
      <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
        No expense data yet
      </div>
    );
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-2">
      {data.map((item, i) => {
        const meta = getCategoryMeta(item.category);
        const pct = total ? (item.amount / total) * 100 : 0;

        return (
          <div key={item.category}>
            <div className="flex justify-between text-xs text-gray-600 mb-0.5">
              <span>
                {meta.icon} {meta.label}
              </span>
              <span>
                {formatCurrency(item.amount)} ({pct.toFixed(0)}%)
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MonthlyChart = ({ data }) => {
  if (!data.length)
    return (
      <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
        No monthly data yet
      </div>
    );
  const max = Math.max(...data.flatMap((d) => [d.income, d.expense]));

  return (
    <div className="flex items-end gap-3 h-32">
      {data.map((item) => (
        <div className="flex-1 flex flex-col items-center gap-1" key={item.month}>
          <div className="w-full flex gap-1 items-end" style={{ height: '96px' }}>
            <div
              className="flex-1 bg-green-400 rounded-t transition-all duration-500"
              style={{ height: `${max ? (item.income / max) * 96 : 0}px` }}
            />
            <div
              className="flex-1 bg-orange-400 rounded-t transition-all duration-500"
              style={{ height: `${max ? (item.expense / max) * 96 : 0}px` }}
            />
          </div>
          <p className="text-xs text-gray-400 truncate w-full text-center">
            {getMonthLabel(item.month).split(' ')[0]}
          </p>
        </div>
      ))}
    </div>
  );
};

const Charts = ({ chartData, monthlyData }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h3 className="font-bold text-gray-700 text-sm mb-3">Expenses by Category</h3>
      <ExpenseChart data={chartData} />
    </div>
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h3 className="font-bold text-gray-700 text-sm mb-3">Monthly Overview</h3>
      <div className="flex gap-3 text-xs text-gray-500 mb-2">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-400 rounded-sm inline-block" /> Income
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" /> Expense
        </span>
      </div>
      <MonthlyChart data={monthlyData} />
    </div>
  </div>
);

export default Charts;
