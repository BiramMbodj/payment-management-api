import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-4">
      <img src={icon} alt={title} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;