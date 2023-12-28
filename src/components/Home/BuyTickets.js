import React from 'react';

const BuyTickets = () => {
  return (
    <div style={{
      position: 'sticky',
      top: '70px',
    }}>
      <picture>
        <img src='/Images/partners/buytick.webp' alt='buy-Ticket' style={{ aspectRatio: '16/9', objectFit: 'cover' }} height={200} />
      </picture>
      <div style={{ marginBottom: '20px', background: 'red' }}>
        
      </div>
    </div>
  );
};

export default BuyTickets;
