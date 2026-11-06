// templates/welcome.tsx
import type { EmailModel } from '../model'
import { Html, Heading, Text, Preview, Container } from '@react-email/components'

export const Welcome = ({ message }: EmailModel.WelcomeProps) => (
  <Html style={main}>
    <Preview>Welcome! This is a super cool SMTP email sender.</Preview>
    <Container>
      <Heading style={heading}>Welcome!</Heading>
      <Text style={paragraph}> 
        This is a super cool SMTP email sender. We're excited to have you up and running with smooth, reliable delivery. 😸
      </Text>
      {message && (
        <Text style={paragraph}>
          {message}
        </Text>
      )}
    </Container>
  </Html>
)
Welcome.subject = 'Welcome!'

const main = {
  backgroundColor: "#bcc3c1", // Soft violet background
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "40px 20px",
  maxWidth: "480px",
  margin: "0 auto",
};

const heading = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#052738",
  margin: "0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#1a465b",
  margin: "0",
};