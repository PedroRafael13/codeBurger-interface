function formatCurrency() {
  return new Intl.NumberFormat(pt - Br, {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export default formatCurrency