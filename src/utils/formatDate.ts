const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(value); // dd/MM/yyyy

export default formatDate;
