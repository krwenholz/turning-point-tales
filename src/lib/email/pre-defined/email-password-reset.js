import {
  email
} from '..';

export const emailPasswordReset = ({
  resetUrl,
  to
}) => email({
  to,
  from: 'noreply@turningpointtales.com',
  subject: 'TurningPointTales: Please reset your password',
  html: `
You forgot your password, didn't you? A tale as old as time.<br/>
We won't hold it against you<br/>
Here's a link to reset your password.
<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${resetUrl}" >Password reset link</a>
<br/>
<br/>
If you didn't request a password reset, please ignore this email.
<br />
<br/>
Adventure safely,
<br/>
- The Team At Turning Point Tales
`,
});
