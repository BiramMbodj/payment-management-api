import express from 'express';
import { initiatePayment, getTransactions } from '../controllers/paymentController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/initiate', authMiddleware, initiatePayment);
router.get('/transactions', authMiddleware, getTransactions);

export default router;