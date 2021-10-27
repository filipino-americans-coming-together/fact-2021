import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './styles.module.css';

const Navigation = () => (
  <Navbar
    variant="dark"
    expand="lg"
    className={`${styles.nav} russian-green-bkg light-text`}
  >
    <Link to="/">
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
            to="/Schedule"
          >
            Conference Agenda
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fontOpenSans ${styles.link}`} to="/team">
            Meet the Team
          </Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Navigation;
