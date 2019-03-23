import Logger from 'js-logger';
import config from 'config';

function get(req, res) {
  if(!config.get('dev')) {
    res.writeHead(302, { Location: '/', });
    res.end();
    return;
  }

  Logger.info('Setting fake user');
  req.session.paidUp = true;
  req.session.patreonId = 'foo';

  res.cookie('user', {
    patreonId: 'Spongebob',
    patreonThumbUrl: 'https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128',
    firstName: 'Square',
    email: 'foo@bar.example',
    paidUp: true,
  }, {
    domain: config.get('server.domain'),
    httpOnly: false,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: 'lax',
    secure: !config.get('dev'),
  });

  res.writeHead(302, { Location: '/' });
  res.end();
}

export {
  get
}

