const fetchStripeKey = () => {
  return document.cookie.split(';').filter((item) => {
    return item.trim().indexOf('STRIPE-KEY=') == 0
  })[0].replace('STRIPE-KEY=', '').trim();
};

export {
  fetchStripeKey
}

