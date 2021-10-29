import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './styles.module.css';
import { Button } from 'react-bootstrap';
import { REGISTRATION_URL } from '../../constants/links';

const Navigation = () => (
  <Navbar
    variant="dark"
    expand="lg"
    className={`${styles.nav} russian-green-bkg light-text`}
  >
    <Link to="/">
      {/* Logo & Name */}
      <Navbar.Brand className={styles.brand}>
        <img
          alt="FACT Logo"
          src={`${process.env.PUBLIC_URL}/img/fact-logo.png`}
          width="30"
          height="53"
          style={{
            marginRight: '0.5rem',
          }}
        />
        FACT 2021
      </Navbar.Brand>
    </Link>

    {/* Navigation */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav className="ml-auto">
        <li className="nav-item">
          <Link
            className={`nav-link fontOpenSans ${styles.link}`}
            to="/workshops"
          >
            Workshops
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link fontOpenSans ${styles.link}`}
            to="/schedule"
          >
            Conference Agenda
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fontOpenSans ${styles.link}`} to="/team">
            Meet the Team
          </Link>
        </li>
        <a target="_blank" rel="noopener noreferrer" href={REGISTRATION_URL}>
          <Button variant="fact" className="gold-metallic-button ml-3">
            Register Now
          </Button>
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Navigation;
