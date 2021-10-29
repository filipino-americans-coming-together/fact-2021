import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import UICard from '../../UIComponents/UICard';

import Layout from '../../components/Utils/Layout';
import Section from '../../components/Utils/Section';
import Footer from '../../components/Footer';

import Hero from '../../components/Utils/Hero';
import About from '../About';
import FacilitatorsSection from '../FacilitatorsSection';
import Actions from '../Actions';

import { REGISTRATION_URL } from '../../constants/links';

const Landing = () => (
  <>
    <Layout>
      <Hero />
      <About />
      <Section className="phthalo-green-bkg">
        <Section.Body>
          <Container>
            <UICard>
              <UICard.Header>
                <UICard.Title>Register for FACT 2021</UICard.Title>
                <UICard.Subtitle>Open until Nov. 12</UICard.Subtitle>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col lg={{ span: 6, offset: 3 }}>
                    <p className="text-white p-2" style={{ fontSize: '1.1em' }}>
                      The registration for FACT 2021 IS{' '}
                      <span role="img" aria-label="sparkle">
                        ✨
                      </span>
                      NOW OPEN!✨ The long wait is finally over! Join us for the
                      largest student-led Filipino-American Conference in the
                      Midwest!
                    </p>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={REGISTRATION_URL}
                  >
                    <Button
                      variant="fact"
                      size="lg"
                      className="gold-metallic-button animated fadeIn"
                    >
                      Register Now
                    </Button>
                  </a>
                </Row>
              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      <FacilitatorsSection />
      <Actions />
      <Footer />
    </Layout>
  </>
);
export default Landing;
