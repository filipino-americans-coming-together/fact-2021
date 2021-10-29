import React from 'react';
import { Container, Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { REGISTRATION_URL } from '../../constants/links';

import styles from './styles.module.css';

const About = () => {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <Image
          src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
          className={`animated fadeIn ${styles.eagle}`}
        />
        <h2 className={styles.heading}>Join FACT Today.</h2>
        <div className={styles.actions}>
          <a target="_blank" rel="noopener noreferrer" href={REGISTRATION_URL}>
            <Button size="lg" variant="fact gold-metallic-button mr-4">
              Register Now →
            </Button>
          </a>
          <Link to="/schedule">
            <Button size="lg" variant="fact rocket-metallic-button mr-4">
              Conference Agenda →
            </Button>
          </Link>
          <Link to="/workshops">
            <Button size="lg" variant="fact phthalo-green-button">
              View All Workshops →
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default About;
