import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const transactions = [
    { id: 1, date: '2023-10-01', amount: 100, status: 'Completed' },
    { id: 2, date: '2023-10-02', amount: 50, status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">[YourAppName]</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Balance</h2>
          <p className="text-3xl">$500.00</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id} className="bg-white p-4 mb-2 rounded shadow">
                <p>{tx.date} - ${tx.amount} - {tx.status}</p>
              </li>
            ))}
          </ul>
          <Link to="/transactions" className="text-blue-600">See More</Link>
        </section>
        <section>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Send Money</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Request Payment</button>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;