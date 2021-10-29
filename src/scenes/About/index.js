import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

import styles from './styles.module.css';

const About = () => {
  return (
    <div className="phthalo-green-bkg">
      <Container className={styles.container} fluid>
        <Row>
          <Col lg={4} md={12}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-logo.png`}
              className={`${styles.logo} ${styles.fade_in_image}`}
            />
          </Col>
          <Col lg={8} md={12} className={styles.headings}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/fact-logo.png`}
              className={`animated fadeIn ${styles.mobile_logo}`}
            />
            <h1 className={`${styles.title} animated fadeIn`}>
              Lakas Ng Pagsasama
            </h1>
            <h3 className={`${styles.subtheme} light-text light-text animated fadeIn`}>
              Strength In Community
            </h3>
            <p className={`${styles.description} light-text animated fadeIn`}>
              Filipino-Americans Coming Together (FACT) Conference brings
              together over 1000 Filipino-Americans from the Midwest and around
              the country into a weekend filled with lasting experiences at the
              University of Illinois at Urbana-Champaign (UIUC) campus. Through
              our workshops and variety show, you will rediscover your
              Filipino-American identity while feeling belonging in a larger
              community.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
