import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} russian-green-bkg`}>
      <Container fluid>
        <Row>
          <Col lg={8} md={12} className={styles.headings}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
              className={styles.mobile_eagle}
            />
            <h3 className={`${styles.date} light-text`}>November 12-14, 2021</h3>
            <h1 className={styles.title}>
              We Unite <br /> Filipino-Americans.
            </h1>
            <p className={`${styles.description} light-text`}>
              FACT is the largest student-led Filipino-American conference in
              the Midwest, promoting Filipino and Filipino-American culture
              through workshops, panels, and performances.
            </p>
          </Col>
          <Col lg={4} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-bird.png`}
              className={styles.eagle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
