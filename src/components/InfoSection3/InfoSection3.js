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
      <InfoSec lightBg={lightBg} id='inf3'>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description1}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Image src={img3} fluid alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection3;
