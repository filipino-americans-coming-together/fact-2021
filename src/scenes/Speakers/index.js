import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Footer from '../../components/Footer';
import Layout from '../../components/Utils/Layout';
import Section from '../../components/Utils/Section';
import Speaker from './Speaker';

import SPEAKERS from '../../constants/speakers.json';

const SpeakerPage = () => (
  <Layout style={{ paddingTop: '10vh' }}>
    <Section>
      <Section.Title>Speakers</Section.Title>
      <Section.Body>
        <Container>
          <Col xs={12} md={{ span: 10, offset: 1 }} className="mb-5"></Col>
          <hr className="py-3" style={{ width: '50%' }} />
          {SPEAKERS.map(({ name, organization, position, bio, image }) => (
            <Speaker
              key={image}
              name={name}
              organization={organization}
              position={position}
              bio={bio}
              imageURL={`/img/facilitators/${image}`}
            />
          ))}
        </Container>
      </Section.Body>
    </Section>
    <Footer />
  </Layout>
);
export default SpeakerPage;
