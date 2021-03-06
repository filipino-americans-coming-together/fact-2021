import React, { useState } from 'react';
import { TransitionMotion, spring } from 'react-motion';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import Layout from '../../components/Utils/Layout';
import Section from '../../components/Utils/Section';
import WorkshopSession from './WorkShopSession';

import { EVENTS } from '../../constants/events';
import WorkshopList from '../../constants/workshops';
import Footer from '../../components/Footer';
import { FormControl } from 'react-bootstrap';

import styles from './styles.module.css';
import { useHistory, useLocation } from 'react-router';

const ALL_WORKSHOPS = 'ALL_WORKSHOPS';

const getWorkshops = (filters) => {
  if (filters === undefined) {
    return WorkshopList;
  }
  const { query = '' } = filters;
  const contains = (str = '', query = '') =>
    str.toLowerCase().includes(query.toLowerCase());
  return WorkshopList.filter((workshop) => {
    return (
      workshop.session === filters.session || filters.session === ALL_WORKSHOPS
    );
  }).filter((workshop) => {
    return (
      contains(workshop.title, query) ||
      contains(workshop.bio, query) ||
      contains(workshop.name, query) ||
      contains(workshop.description, query)
    );
  });
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Workshops = () => {
  const query = useQuery();
  const sessionQuery = query.get('session');
  const history = useHistory();
  const [focusedWorkshop, setFocusedWorkshop] = useState('');
  const [searchFilter, setSearchFilter] = useState(
    sessionQuery ? sessionQuery : ALL_WORKSHOPS
  );
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchDropdownSelect = (eventKey) => {
    setSearchFilter(eventKey);
    history.push({ pathname: '/workshops', search: `?session=${eventKey}` });
  };

  const renderSearchInput = () => {
    const translate = {
      [ALL_WORKSHOPS]: 'All Sessions',
      [EVENTS.WORKSHOP_SESSION_01]: 'Workshop Session 1',
      [EVENTS.WORKSHOP_SESSION_02]: 'Workshop Session 2',
      [EVENTS.WORKSHOP_SESSION_03]: 'Workshop Session 3',
      [EVENTS.NETWORKING_SESSIONS]: 'Networking Sessions',
    };
    return (
      <div className={styles.inputs}>
        <InputGroup className="mr-3">
          <FormControl
            placeholder="Search workshops"
            aria-label="Search workshops"
            aria-describedby="search-workshops"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup>
          <DropdownButton
            title={translate[searchFilter]}
            as={InputGroup.Prepend}
            variant="outline-dark"
            onSelect={handleSearchDropdownSelect}
          >
            <Dropdown.Item eventKey={ALL_WORKSHOPS}>
              All Workshop Sessions
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey={EVENTS.WORKSHOP_SESSION_01}>
              Workshop Session 1 - Social Justice
            </Dropdown.Item>
            <Dropdown.Item eventKey={EVENTS.WORKSHOP_SESSION_02}>
              Workshop Session 2 - Cultural Expression
            </Dropdown.Item>
            <Dropdown.Item eventKey={EVENTS.WORKSHOP_SESSION_03}>
              Workshop Session 3 - Career Panels
            </Dropdown.Item>
            <Dropdown.Item eventKey={EVENTS.NETWORKING_SESSIONS}>
              Networking Sessions
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    );
  };

  const getDefaultStyles = () => {
    return getWorkshops().map((workshop) => ({
      key: workshop.id,
      data: {
        ...workshop,
      },
      style: {
        maxHeight: 0,
        opacity: 0,
      },
    }));
  };

  const getStyles = () => {
    return getWorkshops({ session: searchFilter, query: searchQuery }).map(
      (workshop) => ({
        key: workshop.id,
        data: {
          ...workshop,
          handleClick: () => {
            if (workshop.id === focusedWorkshop) {
              setFocusedWorkshop('');
            } else {
              setFocusedWorkshop(workshop.id);
            }
          },
          isSelected: workshop.id === focusedWorkshop,
        },
        style: {
          maxHeight:
            workshop.id === focusedWorkshop ? spring(2400) : spring(800),
          opacity: spring(1),
        },
      })
    );
  };

  return (
    <Layout style={{ paddingTop: '9vh' }}>
      <Section>
        <Section.Title>Workshops</Section.Title>
        <Section.Body>
          <Container style={{ minHeight: '40vh' }}>
            <Row className={styles.inputRow}>{renderSearchInput()}</Row>
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <TransitionMotion
                  defaultStyles={getDefaultStyles()}
                  styles={getStyles()}
                  willEnter={() => ({
                    maxHeight: 0,
                    opacity: 0,
                  })}
                  willLeave={() => ({
                    maxHeight: spring(0),
                    opacity: spring(0),
                  })}
                >
                  {(props) => (
                    <Row>
                      {props.map(({ data, style }) => {
                        return (
                          <Col md={12} style={style}>
                            <WorkshopSession workshop={data} />
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </TransitionMotion>
              </Col>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      <Footer />
    </Layout>
  );
};
export default Workshops;
