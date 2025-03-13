import pool from '../config/database';

export interface Transaction {
  id?: number;
  user_id: number;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  payment_method: string;
}

export const createTransaction = async (transaction: Transaction): Promise<number> => {
  const [result] = await pool.execute(
    'INSERT INTO transactions (user_id, amount, status, payment_method) VALUES (?, ?, ?, ?)',
    [transaction.user_id, transaction.amount, transaction.status, transaction.payment_method]
  );
  return (result as any).insertId;
};

export const getUserTransactions = async (userId: number): Promise<Transaction[]> => {
  const [rows] = await pool.execute('SELECT * FROM transactions WHERE user_id = ?', [userId]);
  return rows as Transaction[];
};