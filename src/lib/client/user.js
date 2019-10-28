const userSubscribed = (user) => {
  return user.subscriptionPeriodEnd !== null && user.subscriptionPeriodEnd.getMilliseconds() < Date.now();
};

export {
  userSubscribed
}