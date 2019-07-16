import { email } from '..';

export const emailPasswordReset = ({ resetUrl, to }) => email({
  to,
  from: 'noreply@turningpointtales.com',
  subject: 'Password reset request',
  html: `
    You have requested a password reset
    <br/>
    If this was made in error, disregard.
    <br/>
    <br/>
    <a href="${resetUrl}" >click here to reset your password</a>
  `,
});