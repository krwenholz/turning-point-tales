import Logger from 'js-logger';
import config from 'config';

// TODO(kyle): configure different tiers with param
// TODO(kyle): configure different tiers
const allowed = (encodedLogin) => {
  if(config.get('dev')) return true;

  const date = new Date();
  const login = new Buffer(encodedLogin || '', 'base64').toString();
  if(login === (`Cody and KC are cool guy. ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)) return true
}

const get = (req, res) => {
  if (!allowed(req.query.encodedLogin)) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }

  const tier = req.query.tier || 'Townsperson';

  Logger.info('Setting fake user', tier);
  req.session.paidUp = true;
  req.session.patreonId = 'foo';
  req.session.tier = tier;

  res.cookie('user', {
    email: 'foo@bar.example',
    firstName: 'Square',
    paidUp: true,
    patreonId: 'Spongebob',
    patreonThumbUrl: 'https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128',
    tier: tier,
  }, {
    domain: config.get('server.domain'),
    httpOnly: false,
    maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    sameSite: 'lax',
    secure: !config.get('dev'),
  });

  res.writeHead(302, {
    Location: '/'
  });

  res.end();
}

export {
  get
}
