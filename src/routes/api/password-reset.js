import {
  emailPasswordReset
} from 'src/lib/email/pre-defined/email-password-reset';
import {
  getResetUrl,
  setNewPassword
} from 'src/lib/server/password-reset.js';
import Logger from 'js-logger';

export const post = async (req, res) => {
  if (req.body.email) {
    return sendResetEmail(req, res);
  }

  return setPassword(req, res)
}

const setPassword = async (req, res) => {
  const {
    id,
    password,
    token,
  } = req.body;

  try {
    await setNewPassword({
      password,
      id,
      token
    });
    res.status(200).send();
  } catch (error) {
    Logger.error(error);

    res.status(500).send('Could not update password');
  }
}

const sendResetEmail = async (req, res) => {
  try {
    const resetUrl = await getResetUrl(req);

    await emailPasswordReset({
      resetUrl,
      to: req.body.email,
    });

    res.status(200).send();

  } catch (error) {
    Logger.log(error);
    res.status(500).send();
  }
}