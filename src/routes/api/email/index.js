import { email } from '../../../lib/email';

export const post = async (req, res) => {
  email({
    subject: "Hello, World!",
    from: "devops@turningpointtales.com",
    to: 'kristopherpaulsen@gmail.com',
    text: req.body.text,
  })
  .then(x => {
    console.log(x.status);
    res.status(200)
    .end();
  })
  .catch(e => {
    res.status(500)
    .end();
  })
}

export const get = async (req, res) => {
  return res.send({
    token: req.csrfToken(),
  });
}
