import React from 'react';
import { Button, Card, Col, div, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

import SPEAKERS from '../../constants/speakers.json';

const FacilitatorsSection = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>Facilitators</h1>
      <div className={styles.scrollable}>
        {SPEAKERS.map(({ name, position }) => (
          <div key={name} className={styles.facilitator}>
            <Card className={styles.card}>
              <Card.Title className={styles.workshopTitle}>{name}</Card.Title>
              <Card.Text>{position}</Card.Text>
            </Card>
          </div>
        ))}
      </div>
      {/* TODO: add button to workshops */}
      <div className={styles.actions}>
        <Link to="/workshops">
          <Button variant="fact" size="lg" className="phthalo-green-button">
            View All Workshops ➡
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FacilitatorsSection;
