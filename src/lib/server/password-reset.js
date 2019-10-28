import * as jwt from 'jwt-simple';
import {
  findUser,
  updateUserPassword
} from './users';

export const getResetUrl = async (req) => {
  const email = req.body.email;

  const {
    id,
    passwordHash
  } = await findUser(email);

  const token = jwt.encode({
    id,
    email
  }, passwordHash);

  return `${req.protocol}://${req.get('host')}/password-reset?id=${id}&token=${token}`;
};

export const setNewPassword = async ({
  id: suppliedId,
  token,
  password
}) => {
  const {
    passwordHash
  } = await findUser(suppliedId);

  const {
    id
  } = jwt.decode(token, passwordHash)

  return updateUserPassword(id, {
    password
  });
}