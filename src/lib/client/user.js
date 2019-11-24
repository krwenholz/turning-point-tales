import { userTypes } from "src/lib/user_types";

const userSubscribed = user => {
  return (
    user.type == userTypes.ADMIN ||
    user.type == userTypes.CREATOR ||
    (user.subscriptionPeriodEnd !== null &&
      user.subscriptionPeriodEnd.getMilliseconds() < Date.now())
  );
};

export { userSubscribed };
