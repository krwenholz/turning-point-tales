import config from 'config';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.get('sendGrid.apiKey'));

export const email = (content) => sgMail.send(content);