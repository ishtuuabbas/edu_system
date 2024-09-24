import React from 'react';
import './ModelPage.css';

const modelData = [
  {
    icon: '👩‍👧', // Use emojis or replace with your icons
    title: 'Catering to the most needy',
  },
  {
    icon: '🏫',
    title: 'Embedding schools in the heart of urban slums & rural communities',
  },
  {
    icon: '🏠',
    title: 'Purpose-built schools',
  },
  {
    icon: '👩‍🏫',
    title: 'All female faculty & a 50% female student gender ratio',
  },
  {
    icon: '📚',
    title: 'Ensuring a high quality of education',
  },
  {
    icon: '🧩',
    title: 'Holistic student development & alumni support',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Uplifting the entire community',
  },
  {
    icon: '💼',
    title: 'Professional Management',
  },
];

const ModelPage = () => {
  return (
    <div className="model-page">
      <h2 className="model-title">Our Model</h2>
      <div className="model-grid">
        {modelData.map((item, index) => (
          <div key={index} className="model-item">
            <div className="model-icon">{item.icon}</div>
            <p className="model-text">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPage;
