import { email } from '../'

export const helloWorld = () => email({
  to: 'kristopherpaulsen@gmail.com',
  from: 'devops@turningpointtales.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'Hello, world!',
  html: '<strong>Hello again, world!</strong>',
})
