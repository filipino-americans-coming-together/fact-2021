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

import { OPENING_CEREMONY_URL, VSHOW_URL } from '../../constants/links';

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
                <UICard.Title>Thank you!</UICard.Title>
                <UICard.Subtitle>
                  On behalf of FACT Pack and the Philippine Student Association,
                </UICard.Subtitle>
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col>
                    <p className="text-white p-2" style={{ fontSize: '1.1em' }}>
                      We cannot express how grateful we are to you all for
                      attending the Filipino Americans Coming Together
                      Conference this year. The past years have impacted our
                      lives immensely and the FACT Conference has adapted in
                      unexpected ways. In spite of this, you all have come
                      together with the same passion to learn and grow with us.
                      This conference would not have come together without your
                      support and dedication to the awareness of Filipino and
                      Filipino-American culture. We hope the knowledge and
                      connections you acquired this weekend will carry with you
                      beyond FACT 2021 Lakas ng Pagsasama: Strength in
                      Community. Thank you for helping our vision come to life.
                    </p>
                    <p className="text-white p-2" style={{ fontSize: '1.1em' }}>
                      We hope to see you all at MFAS and FACT 2022!
                    </p>
                    <p className="text-white p-2" style={{ fontSize: '1.1em' }}>
                      - Myka Padilla and Lorenzo Magnaye
                    </p>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={OPENING_CEREMONY_URL}
                  >
                    <Button
                      variant="fact"
                      size="lg"
                      className="gold-metallic-button animated fadeIn mr-3 mt-2"
                    >
                      Opening Ceremony
                    </Button>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={VSHOW_URL}>
                    <Button
                      variant="fact"
                      size="lg"
                      className="gold-metallic-button animated fadeIn mt-2"
                    >
                      Variety Show
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
        <Section.Title
          style={{
            fontSize: '2rem',
          }}
        >
          ASA Sweepstakes
        </Section.Title>
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
