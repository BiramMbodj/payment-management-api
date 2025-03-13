import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret');
    (req as any).user = decoded; // Temporary type assertion; consider typing req.user properly
    next(); // Call next() to proceed
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};