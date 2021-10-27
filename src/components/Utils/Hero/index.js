import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} russian-green-bkg`}>
      <Container fluid>
        <Row>
          <Col lg={8} md={12} className={styles.headings}>
            <h3 className="light-text">November 12-14, 2021</h3>
            <h1 className={styles.title}>
              We Unite <br /> Filipino-Americans.
            </h1>
            <p className={`${styles.description} light-text`}>
              The leading Midwest Filipino-American conference for delegates to
              discover more about the Filipino-American identity through
              workshops, performance, and community.
            </p>
          </Col>
          <Col lg={4} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
              className={styles.bird}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
