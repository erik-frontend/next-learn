// этот файл нуен не для данных а для того чтобы показать какими тапами данных могут быть те или инные ключи

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // В TypeScript это называется "объединение строк" (string union type).
  // Это значит, что поле "status" может быть только одним из двух значений: 'pending' или 'paid'.
  status: 'pending' | 'paid';
};