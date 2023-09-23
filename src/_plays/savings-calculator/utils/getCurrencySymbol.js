const CURRENCY_SYMBOL_MAP = {
  INR: '₹',
  USD: '$'
};

export const getCurrencySymbol = (currency) => {
  return CURRENCY_SYMBOL_MAP[currency];
};
