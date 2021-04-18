import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import { Container, Card, CardGroup, CardDeck } from 'react-bootstrap';

import { TopLine,SmallTopLine } from './Team.elements';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dan from '../../img/Dan.jpg';
import Nataliya from '../../img/Nataliya.jpg';

import Image from 'react-bootstrap/Image'

import ThamesValleyAiHub from '../../img/ThamesValleyAiHub.png';
import Bayer from '../../img/Bayer_LifeHub_UK_Logo.jpg';









const Team1 = () => {
  return (
    <Container >
    <Container id="team">

      <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
        Meet The Team  </SmallTopLine >
        </Container>

        <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
        GOLD  
        </SmallTopLine>
        <Container >
        <CardGroup style={{ width: '50%', height: 'auto' }}>
          <CardDeck>

            <Card style={{ textAlign: 'center' }}>
              <Image src={ThamesValleyAiHub} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image src={Bayer} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>


          </CardDeck>
        </CardGroup>
        
         <TopLine></TopLine>

         <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
        Silver  </SmallTopLine >

        <CardGroup>
          <CardDeck>

            <Card style={{ textAlign: 'center' }}>
              <Image src={ThamesValleyAiHub} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image src={Bayer} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
              </Card.Body>
            </Card>

          </CardDeck>
        </CardGroup>
      </Container>
      <TopLine></TopLine>
      </Container>


  );
};

export default Team1;
