import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from '../../components/Utils/Section';

import EventList from './components/EventList';
import Event from './components/Event';

import styles from './styles.module.css';
import Footer from '../../components/Footer';

const Schedule = () => (
  <>
    <Section>
      <Section.Title>
        <div style={{ marginTop: '1.8em' }}>Conference Agenda</div>
      </Section.Title>
      <Section.Body>
        <Container>
          <p className={styles.body}>
            All times CST. View official Whova schedule{' '}
            <a
              href="https://whova.com/web/factf_202111/Agenda"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 12th</h2>
                <h3 className={styles.day}>Friday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Opening Ceremony'}
                  time={'4:00 - 5:00pm'}
                  location="YouTube"
                  links={[{ url: 'https://youtu.be/HZhmOq-eHDM' }]}
                />
                <Event
                  title={'Networking Session 1'}
                  time={'5:00 - 7:00pm'}
                  // TODO: replace link with recording
                  // location="Zoom"
                  // links={[
                  //   {
                  //     url: '',
                  //   },
                  // ]}
                />
              </EventList>
            </Col>
          </Row>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 13th</h2>
                <h3 className={styles.day}>Saturday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Social Justice Workshops'}
                  time={'01:00 - 02:00pm'}
                  location={'View Workshops'}
                  links={[{ url: '/workshops?session=WORKSHOP_SESSION_01' }]}
                />
                <Event
                  title={'Cultural Expression Workshops'}
                  time={'02:30 - 03:30pm'}
                  location={'View Workshops'}
                  links={[{ url: '/workshops?session=WORKSHOP_SESSION_02' }]}
                />
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Meet the Delegates'}
                  time={'04:00 - 6:00pm'}
                  location="Discord"
                  links={[
                    {
                      url: 'https://discord.gg/ZSHanZn87w',
                      text: 'Discord Link',
                    },
                    {
                      url: 'https://www.facebook.com/events/959543471292547/permalink/987707215142839/',
                      text: 'Discord How-To Video',
                    },
                  ]}
                />
              </EventList>
            </Col>
          </Row>
          <Row className={styles.dayContainer}>
            <Col md={4}>
              <div className={`${styles.dayHeader}`}>
                <h2 className={styles.date}>Nov 14th</h2>
                <h3 className={styles.day}>Sunday</h3>
              </div>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Career Panels'}
                  time={'1:00 - 3:00pm'}
                  location={'View Workshops'}
                  links={[{ url: '/workshops?session=WORKSHOP_SESSION_03' }]}
                />
                <Event
                  title={'Networking Session 2'}
                  time={'3:00 - 5:00pm'}
                  // TODO: replace link with recording
                  // location="Zoom"
                  // links={[
                  //   {
                  //     url: '',
                  //   },
                  // ]}
                />
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Variety Show'}
                  time={'5:00 - 7:00pm'}
                  location="YouTube"
                  links={[{ url: 'https://youtu.be/E83OWfUrccg' }]}
                />
              </EventList>
            </Col>
          </Row>
        </Container>
      </Section.Body>
    </Section>
    <Footer />
  </>
);
export default Schedule;
