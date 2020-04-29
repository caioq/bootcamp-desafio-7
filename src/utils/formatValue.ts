const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat('pt', {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 2,
  }).format(value)}`; // R$ 5.000,00

export default formatValue;
