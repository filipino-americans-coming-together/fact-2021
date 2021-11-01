import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const SpeakerDiv = styled.div`
  margin-bottom: 5em;
`;

const ProfileImage = styled(Image)`
  margin-bottom: 0;
  border-radius: 0.75em;
  width: 100%;
`;
const Name = styled.h4`
  font-size: 1.75em;
  font-weight: 700;
  font-family: 'Open Sans';
`;

const Organization = styled.h5`
  font-size: 1.75;
  font-weight: 700;
  font-family: 'Open Sans';
`;

const Position = styled.h6`
  font-size: 1.2em;
  font-family: 'Open Sans';
`;

const Speaker = ({ name, position, organization, bio, imageURL }) => (
  <SpeakerDiv
    data-aos="fade-up"
    data-aos-delay="0"
    data-aos-duration="300"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
  >
    <Col md={{ span: 10, offset: 1 }} className="d-none d-lg-block">
      <Row>
        <Col md={{ span: 4, offset: 0 }}>
          <div className="pb-5">
            <ProfileImage src={`${process.env.PUBLIC_URL}${imageURL}`} fluid />
          </div>
        </Col>
        <Col md={8}>
          <Name>{name}</Name>
          <Organization className="text-black-50">{organization}</Organization>
          <Position className="text-black-50">{position}</Position>
          <p className="pt-3">{bio}</p>
        </Col>
      </Row>
    </Col>

    <div className="d-block d-lg-none">
      <Name className="text-center">{name}</Name>
      <Organization className="text-center text-black-50">{organization}</Organization>
      <Position className="text-center text-black-50 pb-3 ">{position}</Position>
      <Row>
        <Col xs={{ span: 12 }} sm={{ span: 6, offset: 3 }}>
          <div className="pb-2">
            <ProfileImage src={`${process.env.PUBLIC_URL}${imageURL}`} fluid />
          </div>
        </Col>
      </Row>
      <p className="pt-3" style={{ fontSize: '1.1em' }}>
        {bio}
      </p>
    </div>
  </SpeakerDiv>
);

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Speaker;
