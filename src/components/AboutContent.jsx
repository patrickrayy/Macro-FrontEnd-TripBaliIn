// src/components/AboutContent.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutContent = ({ leftContent, rightImage }) => {
  const styles = {
    container: {
      marginTop: '100px',
      width: "100%",
      marginBottom: '90px',
    },
    leftColumn: {
      display: 'flex',
      fontSize: '18px',
      fontWeight: '450',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '20px',
      textAlign: 'left',
      fontFamily: 'Montserrat,sans-serif',
    },
    subTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '10px',
      fontFamily: 'Montserrat,sans-serif',
    },
    who: {
      color: 'black',
    },
    weAre: {
      color: '#0F67B1',
    },
    text: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#555',
    },
    rightColumn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    rightImage: {
      width: '100%',
      maxWidth: '544px', // Keeps image size responsive but limits to a max width
      height: 'auto',
      borderRadius: '10px',
    },
  };

  return (
    <Container style={styles.container}>
      <Row>
        {/* Left Column */}
        <Col xs={12} md={6} style={styles.leftColumn}>
          {leftContent.map((section, index) => (
            <div key={index}>
              <h3 style={styles.subTitle}>
                <span style={styles.who}>{section.titlePart1}</span>{' '}
                <span style={styles.weAre}>{section.titlePart2}</span>
              </h3>
              <p style={styles.text}>{section.description}</p>
            </div>
          ))}
        </Col>

        {/* Right Column */}
        <Col xs={12} md={6} style={styles.rightColumn}>
          <img src={rightImage} alt="About Us" style={styles.rightImage} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
