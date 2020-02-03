import { userTypes } from "src/lib/user_types";

const userSubscribed = user => {
  if(!user) return;

  return (
    user.type == userTypes.ADMIN ||
    user.type == userTypes.CREATOR ||
    (user.subscriptionPeriodEnd !== null &&
      user.subscriptionPeriodEnd.getMilliseconds() < Date.now())
  );
};

export { userSubscribed };
