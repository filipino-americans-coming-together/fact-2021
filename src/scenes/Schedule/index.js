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
        <div style={{ marginTop: '1em' }}>Conference Agenda</div>
      </Section.Title>
      <Section.Body>
        <Container>
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
                  location={'TBD'}
                />
                <Event
                  title={'Pamayanan!'}
                  time={'5:00 - 7:00pm'}
                  location={'TBD'}
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
                  title={'Round 1 Workshop'}
                  time={'01:00 - 02:00pm'}
                  location={'TBD'}
                />
                <Event
                  title={'Round 2 Workshop'}
                  time={'02:30 - 03:30pm'}
                  location={'TBD'}
                />
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Game Day'}
                  time={'04:00 - 6:00pm'}
                  location={'TBD'}
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
                  title={'Round 3 Workshop'}
                  time={'1:00 - 3:00pm'}
                  location={'TBD'}
                />
                <Event
                  title={'Pamayanan! Part 2'}
                  time={'3:00 - 5:00pm'}
                  location={'TBD'}
                />
              </EventList>
            </Col>
            <Col md={4}>
              <EventList>
                <Event
                  title={'Variety Show'}
                  time={'5:00 - 7:00pm'}
                  location={'TBD'}
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
