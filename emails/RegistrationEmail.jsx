import React from 'react';
import { Link } from '@react-email/components';

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export function RegistrationEmail({ registration }) {
  const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : '';

  return (
    <Html>
      <Head />
      <Preview>Swayam 2024</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              height={50}
              src={`https://res.cloudinary.com/dthmnj96x/image/upload/v1714223291/mvj-logo_j4rq5y.png`}
            />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`https://res.cloudinary.com/dthmnj96x/image/upload/v1714222917/swayam-banner_cemjmk.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi {registration.name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Thank you for registering for Swayam 2024!
                </Heading>

                <Text style={paragraph}>
                  <b>Event: </b>
                  {registration.event.title}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Date & Time: </b>
                  {new Date(registration.event.date).toLocaleDateString('en', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    timeZone: 'Asia/Kolkata',
                  })}{' '}
                  - {registration.event.time}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Venue: </b>
                  {registration.event.venue}
                </Text>

                <Text style={paragraph}>
                  You can download or view your E-ticket from the link below:{' '}
                  <br />
                  <Link
                    href={`https://swayam.mvjce.edu.in/ticket/${registration.id}`}
                  >{`https://swayam.mvjce.edu.in/ticket/${registration.id}`}</Link>
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={containerButton} colSpan={2}>
                <Button
                  style={button}
                  href={`https://swayam.mvjce.edu.in/ticket/${registration.id}`}
                >
                  Get Your Ticket!
                </Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            Swayam 2024 MVJ College of Engineering Near ITPB, Whitefield,
            Bangalore-560067
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: '30px 20px',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#B71BD1',
  borderRadius: 8,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  padding: '12px 30px',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
};

const boxInfos = {
  padding: '20px',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};
