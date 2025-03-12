import React from 'react';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    { icon: 'icon1.png', title: 'Fast Payments', description: 'Send and receive money instantly.' },
    { icon: 'icon2.png', title: 'Secure Transactions', description: 'Bank-level security for your peace of mind.' },
    { icon: 'icon3.png', title: 'Easy Integration', description: 'Seamlessly integrates with your business.' },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Simplify Payments with [YourAppName]</h2>
          <p className="text-lg mb-6">Manage mobile transactions securely and effortlessly.</p>
          <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded">Get Started</Link>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;