import { Request, Response } from 'express';
import { createTransaction, getUserTransactions } from '../models/transactionModel';

export const initiatePayment = async (req: Request, res: Response) => {
  const { amount, payment_method } = req.body;
  const userId = (req as any).user.id;
  try {
    const transactionId = await createTransaction({
      user_id: userId,
      amount,
      status: 'pending',
      payment_method,
    });
    res.status(201).json({ message: 'Transaction initiated', transactionId });
  } catch (error) {
    res.status(500).json({ message: 'Error initiating transaction' });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  try {
    const transactions = await getUserTransactions(userId);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
};