import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

import styles from './styles.module.css';

import SPEAKERS from '../../constants/speakers.json';

const FacilitatorsSection = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>Facilitators</h2>
      <hr className={styles.line} />
      <SimpleBar
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100vw',
        }}
      >
        <div className={styles.scrollable}>
          {SPEAKERS.map(({ name, position, organization, image }) => (
            <Card className={styles.card} key={name}>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/img/facilitators/${image}`}
                alt={name}
                className={styles.image}
              />
              <Card.Title className={styles.workshopTitle}>{name}</Card.Title>
              <p className={styles.organization}>{organization}</p>
              <p>{position}</p>
            </Card>
          ))}
        </div>
      </SimpleBar>
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
