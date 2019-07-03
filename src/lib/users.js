import AWS from 'aws-sdk';
import Logger from 'js-logger';
import config from 'config';
import securePassword from 'secure-password';

// TODO(kyle): Integrate login with Patreon
// TODO(kyle): Add real DB against Postgres, change session store to DB
// TODO(kyle): CSP https://sapper.svelte.dev/docs#Content_Security_Policy_CSP
// TODO(kyle): Password reset flow: https://stackoverflow.com/questions/20277020/how-to-reset-change-password-in-node-js-with-passport-js#27580553
// TODO(kyle): Triple check security https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46
// TODO(kyle): Rate limit shit https://github.com/nfriedly/express-rate-limit https://github.com/AdamPflug/express-brute

const passwordHasher = securePassword();

const users = [];

const findUser = (identifier) => {
  for (const user of users) {
    if (identifier === user.email || identifier === user.id) return Promise.resolve(user);
  }

  return Promise.reject('NOT_FOUND');
};

/**
 * A function to return the interesting, and safer, subset of details about a user.
 */
const findUserSafeDetails = (identifier) => {
  for (const user of users) {
    if (identifier !== user.email && identifier !== user.id) continue;

    const userSafeDetails = {
      email: user.email,
      firstName: user.firstName,
      id: user.id
    };

    return Promise.resolve(userSafeDetails);
  }

  return Promise.reject(null);
};

/**
 * Adds and returns a user. You should check if the user exists first, though.
 */
const addUser = (firstName, email, password) => {
  findUser(email)
    .then(user => {
      return Promise.reject('USER_EXISTS');
    }).catch(error => {
      if(error !== 'NOT_FOUND') return Promise.reject(error);
      const user = {
        email: email,
        firstName: firstName,
        passwordHash: '',
        id: users.length
      };

      return passwordHasher.hash(Buffer.from(password))
        .then(hash => {
          user.passwordHash = hash.toString("utf-8")
          users.push(user);
          Logger.info('User added', user.id);
          return findUserSafeDetails(user.id);
        });
    })
};

addUser('Adam', 'adam@h2wib.com', 'foo')

export {
  addUser,
  findUser,
  findUserSafeDetails
}
