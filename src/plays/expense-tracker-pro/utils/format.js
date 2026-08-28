export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(amount);

export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

export const getMonthLabel = (monthStr) => {
  const [year, month] = monthStr.split('-');

  return new Date(year, month - 1).toLocaleDateString('en-PH', {
    month: 'long',
    year: 'numeric'
  });
};
