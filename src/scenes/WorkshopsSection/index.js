import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './styles.module.css';

const WORKSHOPS = [
  { title: 'Who is Filipino Enough?' },
  { title: 'Who is Filipino Enough?' },
  { title: 'Who is Filipino Enough?' },
  { title: 'Who is Filipino Enough?' },
];

const WorkshopsSection = () => {
  return (
    <div className={styles.root}>
      <Container>
        <h1>Workshops</h1>
        <Row>
          {WORKSHOPS.map(({ title }) => (
            <Col key={title}>{title}</Col>
          ))}
        </Row>
        {/* TODO: add button to workshops */}
      </Container>
    </div>
  );
};

export default WorkshopsSection;
