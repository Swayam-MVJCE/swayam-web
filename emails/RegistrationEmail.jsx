import React from "react";
import {Link} from "@react-email/components";

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
} from "@react-email/components";

const RegistrationEmail = ({
  registration
}) => {


  const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : "";

  return (
    <Html>
      <Head />
      <Preview>Swayam 2024</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img 
            height={50}
            src={`https://res.cloudinary.com/dthmnj96x/image/upload/v1714223291/mvj-logo_j4rq5y.png`} />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`https://res.cloudinary.com/dthmnj96x/image/upload/v1714222917/swayam-banner_cemjmk.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {registration.name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
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
                  {new Date(registration.event.date).toDateString()} at {registration.event.time}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Venue: </b>
                  {registration.event.venue}
                </Text>
                
                <Text style={paragraph}>
                  You can download or view your E-ticket from the link below: <br />
                  <Link href={`https://swayam.mvjce.edu.in/ticket/${registration.id}`}>{`https://swayam.mvjce.edu.in/ticket/${registration.id}`}</Link>
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={`https://swayam.mvjce.edu.in/ticket/${registration.id}`}>Get Your Ticket!</Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            Swayam 2024
            MVJ College of Engineering Near ITPB, Whitefield, Bangalore-560067
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

RegistrationEmail.PreviewProps = {
  registration: {
    id: 'clvgv1elr00011lczpdxsqkvh',
    eventId: 'c5374df6-c56a-4c25-bdd7-24c6a524b38d',
    userId: 'cluk12nhu0000c05dzgh8othe',
    email: 'sidhsreejil@gmail.com',
    name: 'Sidharth Sreejil',
    phone: '7560877023',
    collegeName: 'MVJ College of Engineering',
    noOfParticipants: 2,
    paymentVerification: 'PENDING',
    paymentAmount: 1500,
    paymentId: 'sad1231321dawd',
    screenshotUrl: 'https://e8g7.bn.idrivee2-70.com/payment-screenshots/80a607c6-77a1-4f6d-9b7e-608562181389',
    createdAt: "2024-04-26T16:01:30.920Z",
    updatedAt: "2024-04-26T16:01:30.920Z",
    participants: [
      {
        id: 'clvgv1elr00021lcz5ctzl9kd',
        registrationId: 'clvgv1elr00011lczpdxsqkvh',
        name: 'Virat',
        phone: '7560877023'
      },
      {
        id: 'clvgv1elr00031lczusl5036m',
        registrationId: 'clvgv1elr00011lczpdxsqkvh',
        name: 'Rohit',
        phone: '7560877023'
      }
    ],
    event: {
      id: 'c5374df6-c56a-4c25-bdd7-24c6a524b38d',
      title: 'KALAkshetra',
      slug: 'kalakshetra',
      description: 'Experience the ultimate on-stage storytelling event, seamlessly weaving drama and dance into a mesmerizing amalgamation of artistic expression and creativity. This event is bound to test your limits on teamwork, coordination, and synchronization.',
      judgingCriteria: '1. Theme/Storytelling\r\n' +
        '2. Creativity\r\n' +
        '3. Team Coordination/Sync\r\n' +
        '4. Expressions\r\n' +
        '5. Costume/Prop Usage\r\n' +
        '6. Stage Presence',
      rules: '1. This is a team event, allowing up to 7 - 15 members per team.\r\n' +
        '2. The performance duration is strictly limited to 5 + 2 minutes.\r\n' +
        '3. Various Indian dance forms are encouraged for this competition.\r\n' +
        '4. Performances must convey a coherent story or a theme.\r\n' +
        '5. The use of props and theme - specific costumes are encouraged.\r\n' +
        '6. The use of fire, water, color powders, glitters or any other potentially hazardous props on the stage is strictly prohibited. \r\n' +
        '7. Participants must submit their music to the event coordinators in at least two days prior to the event.\r\n' +        
        '8. Backdrops, including screens for projection, are not permitted.\r\n' +
        '9. Any display of obscenity is strictly prohibited, and will result in immediate disqualification.\r\n' +
        '10. All decisions regarding the event will be made by the judges, whose verdicts are final.',
      poster_url: 'https://res.cloudinary.com/dthmnj96x/image/upload/v1712163119/Events%20for%20swayam/10_1_kqeqom.png',
      date: "2024-05-24T15:30:00.000Z",
      time: '3:30PM - 5:30PM',
      venue: 'Mainstage',
      registrationFee: 1500,
      firstPrize: '₹50000',
      secondPrize: '₹25000',
      category: 'Main Event',
      isGroup: true,
      minParticipants: 7,
      maxParticipants: 15
    }
  }
};

export default RegistrationEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#B71BD1",
  borderRadius: 8,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
