import React from 'react'
import homecss from './homeStyles.module.css'

const BuyTickets = () => {
  return (
    <>
      <picture>
      <img src='/Images/partners/buytick.webp' alt='buy-Ticket' style={{ aspectRatio: '16/9', objectFit: 'cover' }} height={350} />
      </picture>
      <div style={{ marginBottom: '20px', background: 'red' }}>
        <ul style={{ display: 'flex' }}>
          <li>Let's Connect</li>
          <li>l</li>
          <li>i</li>
          <li>f</li>
        </ul>
      </div>
    </>
  )
}

export default BuyTickets
