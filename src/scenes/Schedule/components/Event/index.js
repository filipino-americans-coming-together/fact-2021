import React from 'react';

import styles from './styles.module.css';

const Event = ({ title, time, location = null, link = null }) => (
  <li className={styles.event}>
    <h4 className={styles.title}>{title}</h4>
    <h4 className={styles.time}>{time}</h4>
    {location && link === null && (
      <h5 className={`${styles.location} text-black-50`}>{location}</h5>
    )}
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5 className={`${styles.link}`}>{location}</h5>
      </a>
    )}
  </li>
);
export default Event;
