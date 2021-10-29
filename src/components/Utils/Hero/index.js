import React from 'react';
import { Container, Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { REGISTRATION_URL } from '../../../constants/links';

import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} russian-green-bkg`}>
      <Container fluid>
        <Row>
          <Col lg={8} md={12} className={styles.headings}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
              className={`animated fadeIn ${styles.mobileEagle}`}
            />
            <h3 className={`${styles.date} light-text animated fadeIn`}>
              November 12-14, 2021
            </h3>
            <h1 className={`${styles.title} animated fadeIn`}>
              We Unite <br /> Filipino-Americans.
            </h1>
            <p className={`${styles.description} light-text animated fadeIn`}>
              FACT is the largest student-led Filipino-American conference in
              the Midwest, promoting Filipino and Filipino-American culture
              through workshops, panels, and performances.
            </p>
            <Link to="/schedule">
              <Button
                variant="fact"
                size="lg"
                className={`${styles.conferenceButton} rocket-metallic-button animated fadeIn`}
              >
                Conference Agenda
              </Button>
            </Link>
            {/* TODO: fix these links */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={REGISTRATION_URL}
            >
              <Button
                variant="fact"
                size="lg"
                className={`${styles.registerButton} gold-metallic-button animated fadeIn`}
              >
                Register Now
              </Button>
            </a>
          </Col>
          <Col lg={4} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
              className={`${styles.eagle} ${styles.fadeInImage}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
