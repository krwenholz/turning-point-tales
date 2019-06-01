import AWS from 'aws-sdk';
import config from 'config';

const poolData = {};
if (config.get('environment') === 'production') {
  poolData.UserPoolId = config.get('production.pool');
  poolData.ClientId = config.get('production.client');
} else {
  poolData.UserPoolId = config.get('default.pool');
  poolData.ClientId = config.get('default.client');
}

const userPool = AWS.AmazonCognitoIdentity.CognitoUserPool(poolData);

