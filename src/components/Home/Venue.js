import React from 'react';
import useWindowWidth from '../partners/CustomHook/UseWindowWidth'

const ConferenceVenue = () => {
  const windowWidth = useWindowWidth();

  return (
    <div style={{ margin: '20px 0', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {windowWidth > 696 ?
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '0 0 50%', paddingRight: '20px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/Images/home/location.jpg"
                  alt=""
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}>
                  {/* <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}></h3> */}
                  <p>Senate Hall<br />Administration Building, IITGuwahati</p>
                  <a
                    href="https://goo.gl/maps/UzqLHD1pNnMVMkL47"

                    style={{ display: 'block', marginTop: '10px', textDecoration: 'underline' }}
                  >
                    View Location
                  </a>
                </div>
              </div>
            </div>
            <div style={{ flex: '0 0 50%', paddingLeft: '20px' }}>
              <div style={{ marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold', color: 'red' }}>Conference Venue</div>
              <h2 style={{ fontSize: '3em', marginBottom: '20px', fontWeight: '400' }}>Hosted in MIT's Award-Winning Stata Center</h2>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>
                The Ray and Maria Stata Center or Building 32 is a 720,000-square-foot academic complex designed by
                Pritzker Prize-winning architect Frank Gehry for the Massachusetts Institute of Technology.
              </p>
              <a
                href="/register"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  marginTop: '20px',
                  fontSize: '1.2em',
                }}
              >
                Registration
              </a>
            </div>
          </div>
          :
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ flex: '0 0 50%', paddingRight: '20px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/Images/home/location.jpg"
                  alt=""
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}>
                  <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>MIT Stata Center</h3>
                  <p>32 Vassar St<br />Cambridge MA, 02139</p>
                  <a
                    href="https://goo.gl/maps/UzqLHD1pNnMVMkL47"

                    style={{ display: 'block', marginTop: '10px', textDecoration: 'underline' }}
                  >
                    View Location
                  </a>
                </div>
              </div>
            </div>
            <div style={{ flex: '0 0 50%', paddingLeft: '20px' }}>
              <div style={{ marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>Conference Venue</div>
              <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Hosted in MIT's Award-Winning Stata Center</h2>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>
                The Ray and Maria Stata Center or Building 32 is a 720,000-square-foot academic complex designed by
                Pritzker Prize-winning architect Frank Gehry for the Massachusetts Institute of Technology.
              </p>
              <a
                href="/register"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  marginTop: '20px',
                  fontSize: '1.2em',
                }}
              >
                Free Registration
              </a>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default ConferenceVenue;
