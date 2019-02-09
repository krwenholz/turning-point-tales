import Logger from 'js-logger';
import config from 'config';

function get(req, res) {
  if(config.get('dev')) {
    req.session.patreonTokens = {
      accessToken: 'foo',
      refresh_token: 'foo',
      expires_in: 'foo',
      scope: 'foo',
      tokenType: 'everything',
    };

    req.session.user = {
      patreonId: 'Spongebob',
      patreonThumbUrl: 'https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128',
      firstName: 'Square',
      email: 'foo@bar.example',
      paidUp: true,
    };
  }

  res.writeHead(301, { Location: '/' });
  res.end();
}

export {
  get
}

