import React from 'react';

const ExploreImage = ({ images }) => {
  const styles = {
    gridContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '30px',
      flexWrap: 'wrap',  // Ensures the images wrap on small screens
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: '1',
      width: '100%',
    },
    bottomRow: {
      display: 'flex',
      gap: '10px',
      width: '100%',
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: '0.5',
      width: '100%',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '5px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'filter 0.3s ease',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '550',
      textAlign: 'center',
      transition: 'opacity 0.3s ease',
      fontFamily: 'Montserrat',
    },
    largeImage: {
      width: '98%',
      height: '360px',
    },
    smallImage: {
      width: '100%',
      height: '250px',
    },
    mediumImage: {
      width: '48.5%',
      height: '400px',
    },

    // Responsive Styles
    '@media (max-width: 768px)': {
      gridContainer: {
        flexDirection: 'column', // Stack columns vertically on mobile
        alignItems: 'center',    // Center align on small screens
      },
      leftColumn: {
        width: '100%',  // Full width for left column on smaller screens
      },
      rightColumn: {
        width: '100%',  // Full width for right column on smaller screens
      },
      largeImage: {
        height: '300px', // Adjust height of large image for mobile
      },
      mediumImage: {
        width: '100%',  // Make medium images full width on mobile
        height: '250px', // Adjust height for mobile
      },
      smallImage: {
        height: '200px', // Adjust height for smaller images on mobile
      },
    },
  };

  const renderImageWithHoverEffect = (src, alt, style, overlayText) => (
    <div
      style={{ ...styles.imageContainer, ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('img').style.filter = 'brightness(50%)';
        e.currentTarget.querySelector('.overlay').style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('img').style.filter = 'brightness(100%)';
        e.currentTarget.querySelector('.overlay').style.opacity = 0;
      }}
    >
      <img src={src} alt={alt} style={styles.image} />
      <div className="overlay" style={styles.overlay}>
        {overlayText}
      </div>
    </div>
  );

  return (
    <div style={styles.gridContainer}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        {renderImageWithHoverEffect(images.large, 'Large', styles.largeImage, 'Ubud')}
        <div style={styles.bottomRow}>
          {renderImageWithHoverEffect(images.medium1, 'Medium 1', styles.mediumImage, 'Kuta')}
          {renderImageWithHoverEffect(images.medium2, 'Medium 2', styles.mediumImage, 'Gianyar')}
        </div>
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        {renderImageWithHoverEffect(images.small1, 'Small 1', styles.smallImage, 'Seminyak')}
        {renderImageWithHoverEffect(images.small2, 'Small 2', styles.smallImage, 'Nusa Dua')}
        {renderImageWithHoverEffect(images.small3, 'Small 3', styles.smallImage, 'Nusa Penida')}
      </div>
    </div>
  );
};

export default ExploreImage;
