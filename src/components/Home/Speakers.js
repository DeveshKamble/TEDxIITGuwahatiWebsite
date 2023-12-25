import React,{useState,useEffect} from 'react'

const Speakers = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prevZoom) => !prevZoom);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleZoom, 400); 
    return () => clearInterval(intervalId);
  }, []); 
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000',
    padding: '5px',
  };

  const headingStyle = {
    color: 'white',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const zoomableImageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'transform 1s ease-in-out',
    transform: isZoomed ? 'scale(0.8)' : 'none',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h5 style={{ color: 'red' }}>know about our speakers</h5>
        <h2 style={headingStyle}>
          Seakers coming soon
        </h2>
        <div style={imageContainerStyle} onClick={toggleZoom}>
          <img style={zoomableImageStyle} src='/Images/partners/coming-soon.avif' alt='cumsoon' />
        </div>
      </div>
    </div>
  );
}

export default Speakers
