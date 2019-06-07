import AWS from 'aws-sdk';
import config from 'config';
import securePassword from 'secure-password';

// TODO(kyle): Add sign up page with in-memory DB
// TODO(kyle): User edit page! (Get KC's help), integrate with Patreon
// TODO(kyle): Add real DB against Postgres, Probably move to express-session https://github.com/expressjs/session
// TODO(kyle): CSP https://sapper.svelte.dev/docs#Content_Security_Policy_CSP
// TODO(kyle): Password reset flow: https://stackoverflow.com/questions/20277020/how-to-reset-change-password-in-node-js-with-passport-js#27580553
// TODO(kyle): Triple check security https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46
// TODO(kyle): Create a little flash alert thing for forms with https://express-validator.github.io/docs/
// TODO(kyle): Rate limit shit https://github.com/nfriedly/express-rate-limit https://github.com/AdamPflug/express-brute

// TODO(kyle): This stuff is for testing, move it to a dabatase
const users = [{
  email: 'a@b.com',
  passwordHash: '',
  id: 1
}];

// TODO(kyle): Don't need this after real users
const passwordHasher = securePassword();

passwordHasher.hash(Buffer.from("foo"))
  .then(hash => users[0].passwordHash = hash.toString("utf-8"));

const findUser = (identifier, callback) => {
  for(const user in users) {
    if (identifier === user.email || identifier === user.id) return callback(null, user);
  }

  return callback(null);
};

export {
  findUser
}
