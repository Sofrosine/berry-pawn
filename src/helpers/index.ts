export const currencyConverter = (amount: number) => {
    const _amount = amount < 0 ? 0 : amount;
  
    return `IDR ${String(_amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };
  