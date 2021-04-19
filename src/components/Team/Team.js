import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import { Card, CardGroup, CardDeck } from 'react-bootstrap';

import { TopLine,SmallTopLine } from './Team.elements';
import { Container } from '../../global_styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dan from '../../img/Dan.jpg';
import Nataliya from '../../img/Nataliya.jpg';
import Amadeusz from '../../img/Amadeusz.jpg';
import Emily from '../../img/Emily.jpg';
import Joe from '../../img/Joe.jpg';
import Savva from '../../img/Savva.jpg';
import Neyma from '../../img/Neyma.jpg';
import Dimitar from '../../img/Dimitar.jpg';
import Anna from '../../img/Anna.jpg';
import { FaLinkedin,FaMailBulk } from 'react-icons/fa';
import Image from 'react-bootstrap/Image'

const SocialIcon = styled.div`
display: none;
@media screen  {
    display: block;
    cursor: pointer;

  }
`;
 const SocialIconLink = styled.a`
  font-size: 30px;
`;





const Team = () => {
  return (
    <Container >
    <Container id="team">

      <SmallTopLine style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
        Meet The Team  </SmallTopLine >
        </Container>

        <Container style={{ width: 'auto', height: 'auto' }} >
        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Image src={Dan} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body style={{ width: 'auto',height: 'auto'}}>
                <Card.Title style={{ fontFamily:'clone-rounded-latin,sans-serif'  }}>
                  Daniel Broomhead
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  President
                </Card.Text>

                <SocialIcon>

                <SocialIconLink
                 href={'mailto:' + 'd.l.broomhead@student.reading.ac.uk'}
                 target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}
              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/daniel-broomhead-970ba1171"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}
              >
                <FaLinkedin />
                </SocialIconLink>
                </SocialIcon>



              </Card.Body>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <Image
                src={Nataliya}
                fluid
                style={{width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
                Nataliya Lazutkina
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Vice-President
                </Card.Text>


                <SocialIcon>
                <SocialIconLink

                href={'mailto:' + 'n.lazutkina@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}
              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/nataliya-lazutkina"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}
              >
                <FaLinkedin />
                </SocialIconLink>
                </SocialIcon>
              </Card.Body>
            </Card>



            <Card style={{ textAlign: 'center' }}>
              <Image
                src={Amadeusz}
                fluid
                style={{width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Amadeusz Wlodarczyk
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Secretary
                </Card.Text>


                <SocialIcon>

                <SocialIconLink

                href={'mailto:' + 'a.wlodarczyk@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}
              >
                <FaMailBulk />
                </SocialIconLink>

                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>




        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Image src={Emily} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body>
                <Card.Title  style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Emily Man
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Social Secretary
                  </Card.Text>


                  <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 'emilyman2411@gmail.com'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/emily-man-98b448195"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}

              >
                <FaLinkedin />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image src={Joe} fluid style={{ width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Joe McKeown
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Treasurer
                </Card.Text>


                <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 'j.mckeown@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>





                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image src={Savva} fluid style={{ width: 'auto', height: 'auto' }} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Savva Podkopov
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Welfare Officer
                </Card.Text>

                <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 's.i.b.podkopov@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>





                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>

        <TopLine></TopLine>

        <CardGroup>
          <CardDeck>
            <Card style={{ textAlign: 'center' }}>
              <Image src={Neyma} fluid style={{width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily:'clone-rounded-latin,sans-serif' }}>
                  Neyma Siddiqui
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif'}}>
                  Google Dev Rep
                </Card.Text>

                <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 'neyma.siddiqui@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/neymasiddiqui"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}

              >
                <FaLinkedin />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image
                src={Dimitar}
                fluid
                style={{ width: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Dimitar Spasov{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Designer
                </Card.Text>


                <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 'mitkospasov1999@gmail.com'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/dimitar-spasov"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}

              >
                <FaLinkedin />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>

            <Card style={{ textAlign: 'center' }}>
              <Image src={Anna} fluid style={{width: 'auto', height: 'auto'}} />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Anna Harding{' '}
                </Card.Title>
                <Card.Text style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}>
                  Designer
                </Card.Text>




                <SocialIcon>
                <SocialIconLink
                href={'mailto:' + 'anna.harding@student.reading.ac.uk'}
                target="_blank"
                aria-label="Email"
                style={{ color: '#EA5837' }}

              >
                <FaMailBulk />
                </SocialIconLink>

                <SocialIconLink>{" "}</SocialIconLink>  


                <SocialIconLink
                href="https://www.linkedin.com/in/anna-harding-a82ba5195"
                target="_blank"
                aria-label="Linkedin"
                style={{ color: '#EA5837' }}

              >
                <FaLinkedin />
                </SocialIconLink>



                </SocialIcon>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>




      </Container>
      <TopLine></TopLine>
      </Container>


  );
};

export default Team;
