import pool from '../config/database';

export interface User {
  id?: number;
  email: string;
  password: string;
  role: 'admin' | 'merchant' | 'customer';
}

export const createUser = async (user: User): Promise<number> => {
  const [result] = await pool.execute(
    'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
    [user.email, user.password, user.role]
  );
  return (result as any).insertId;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  const users = rows as User[];
  return users.length > 0 ? users[0] : null;
};