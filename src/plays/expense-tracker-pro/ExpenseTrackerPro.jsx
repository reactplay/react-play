import PlayHeader from 'common/playlists/PlayHeader';
import useTransactions from './hooks/useTransaction';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Charts from './components/Charts';

function ExpenseTrackerPro(props) {
  const {
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
  } = useTransactions();

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="grow p-4 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SummaryCards summary={summary} />
          <Charts chartData={chartData} monthlyData={monthlyData} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TransactionForm onAdd={addTransaction} />
            <TransactionList
              availableMonths={availableMonths}
              filterMonth={filterMonth}
              filterType={filterType}
              setFilterMonth={setFilterMonth}
              setFilterType={setFilterType}
              transactions={filtered}
              onDelete={deleteTransaction}
            />
          </div>
          {filtered.length > 0 && (
            <div className="text-center mt-4">
              <button
                className="text-xs text-red-400 hover:text-red-600 transition-colors"
                onClick={clearAll}
              >
                Clear All Transactions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseTrackerPro;
