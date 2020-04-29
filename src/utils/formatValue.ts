const formatValue = (value: number): string =>
  Intl.NumberFormat('bzs-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // R$ 5.000,00

export default formatValue;
