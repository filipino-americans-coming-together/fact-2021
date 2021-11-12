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

import YouTube from 'react-youtube';

import styles from './styles.module.css';

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
      <Section>
        <Section.Title style={{
          fontSize: '2rem',
        }}>ASA Sweepstakes</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <YouTube videoId={'UhzUZHK_p5k'} className={styles.video} />
              </Col>
              <Col>
                <p>
                  Would you like to be entered to win one of two $25 Target Gift
                  Card giving? Just do one of these two tasks:
                </p>
                <p>
                  1. Sign-up as a job seeker at Asian Student Achievement by
                  going to{' '}
                  <a href="https://www.learnasa.org/">www.learnasa.org</a> (ASA
                  is a not-for-profit organization that specializes in coaching
                  that also has a diversity-driven job board) and click on
                  “create free career profile” and list “ASA/FACT” under “How
                  did you find out about us?”
                </p>

                <p>
                  2. Join our partner, Juno (Juno is a financial service that
                  aims to help students lower their student loans) by clicking
                  on{' '}
                  <a href="https://joinjuno.com/p/asianstudentachievement?grow=asiansta">
                    this link{' '}
                  </a>
                  and send an email of a screenshot of your registration
                  confirmation to ASA@learnasa.org.
                </p>

                <p>
                  Also, learn more about our partner, NAAAP (National
                  Association of Asian American Professionals) and click on{' '}
                  <a href="https://members.naaap.org/join-naaap">this link </a>
                  and choose “ASA/Asian Student Achievement” on "how you heard
                  about us" (Not required for sweepstakes).
                </p>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      <Footer />
    </Layout>
  </>
);
export default Landing;
