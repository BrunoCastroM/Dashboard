export default function formatCurrency(value: string, currency: string) {
  return parseFloat(value).toLocaleString('en-us', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  });
}
