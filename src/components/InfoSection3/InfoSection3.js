import React from 'react';
import { Container } from '../../global_styles';
import Image from 'react-bootstrap/Image'

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  AccordionSection,
} from './InfoSection3.elements';

const InfoSection3 = ({
  imgStart,
  lightBg,
  lightTopLine,
  lightTextDesc,
  description,
  description1,
  description2,
  headline,
  lightText,
  topLine,
  img3,
  alt,
  start,
}) => {
  return (
    <>
    <AccordionSection>
      <InfoSec lightBg={lightBg} id='inf3'>
        <Container>
          <InfoRow imgStart={imgStart}>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description1}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
              </TextWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
      </AccordionSection>
    </>
  );
};

export default InfoSection3;
