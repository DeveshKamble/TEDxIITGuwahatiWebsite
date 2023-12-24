import React from 'react';
import BuyTickets from './BuyTickets';

const parastyle = {
  lineHeight: '1.7em',
  fontSize: '1.1em',
  marginBottom: '2rem',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10vw',
};

const headerStyle = {
  borderTop: '5px solid #fe2b07',
  padding: '20px',
};

const spanStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const divAStyle = {
  marginRight: '10px',
};

const articleStyle = {
  position: 'relative',
  background: '#f7f7f7',
  borderTop: '1px solid #000',
  borderBottom:'1px solid #000'
};

const contentStyle = {
  maxWidth: '50vw',
  padding: '0 0 10rem 10rem',
};

const headingStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '40px',
  marginBottom: '30px',
};

const smallStyle = {
  fontSize: '16px',
};

const subheadingStyle = {
  fontWeight: 500,
  fontStyle: 'normal',
  color: '#fff',
  background: '#E42301',
  padding: '5px 1rem',
  marginLeft: '-5rem',
  marginBottom: '3rem',
  display: 'inline-block',
  fontSize: '1.4rem',
};

const linkSpanStyle = {
  border: '3px solid red',
  padding: '10px',
};

const linkStyle = {
  color: 'red',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const buyTicketsStyle = {
  position: 'sticky',
  top: 0,
  height: '100px',
  width: '100px',
  float: 'right',
  marginRight: '20px',
};

const ThemeInfo = () => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={spanStyle}>
          <div style={divAStyle}>a</div>
          <div>become a partner</div>
        </span>
      </div>
      <article style={articleStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>
            <small style={smallStyle}>THIS YEAR'S THEME IS</small>
            Ripple Effect
          </h2>
          <h3 style={subheadingStyle}>Ideas which can reach the world</h3>
          <p style={parastyle}>
            Imagine a place where ideas aren’t just celebrated, they’re amplified. Welcome to TEDxHobart, a dynamic
            platform that shines a spotlight on Tasmania’s incredible innovation, inspiration, and big ideas.
          </p>
          <p style={parastyle}>
            TEDxHobart isn’t just another event – it’s a stage where Tasmania’s brightest minds come together to share
            their thoughts with a local audience that holds considerable influence. But it doesn’t stop there; their
            ideas also resonate worldwide through online sharing, reaching people across the globe.
          </p>
          <p style={parastyle}>
            Think of it as a space where conversations run deep and connections are made. Imagine trailblazers from all
            corners of our state, those who are changing the world with their extraordinary projects. TEDxHobart
            doesn’t just showcase these visionaries; it propels them onto a larger stage, multiplying the impact of
            their groundbreaking work.
          </p>
          <p style={parastyle}>
            The theme for TEDxHobart 2024 is Ripple Effect. What’s that, you ask? It’s just like dropping a pebble into
            a pond and watching the ripples spread far and wide.
          </p>
          <p style={parastyle}>
            Picture this: a single disturbance causing a chain reaction that reverberates through different parts of
            a complex system. It’s not just a concept; the ripple effect can be seen in fields like finance, technology,
            law, agriculture, history, community development, conservation, the arts, and tourism. Imagine how a small
            shift in one area can have a mighty impact across many others.
          </p>
          <p style={parastyle}>
            So, if you’re excited about the power of ideas, if you’re intrigued by the potential of small actions
            creating big waves, then TEDxHobart is the place to be. Join us in exploring the incredible stories of how
            tiny ripples created right here in Tasmania are shaping our world in astonishing ways.
          </p>
          <span style={linkSpanStyle}>
            <a href='/aboutUs' style={linkStyle}>
              READ ABOUT TEDX
            </a>
          </span>
        </div>
      </article>
      <div style={buyTicketsStyle}>
        <BuyTickets />
      </div>
    </div>
  );
};

export default ThemeInfo;
