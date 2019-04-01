import Logger from 'js-logger';
import config from 'config';

// TODO(kyle): Need to forward all logs to CloudWatch
// set up buckets https://github.com/cloudposse
// https://github.com/cloudposse/terraform-aws-tfstate-backend
// https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3ExportTasks.html
// https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_GettingStarted.html
// https://www.tddapps.com/2016/10/16/how-to-forward-your-heroku-logs-to-aws-cloudwatch-for-free/
// https://goaccess.io/get-started

function initLogging() {
  Logger.useDefaults();
  Logger.setLevel((config.get('dev') ? Logger.DEBUG : Logger.INFO));
}

function logRequest(req, res, next) {
  Logger.debug(`Received [${req.method}] on [${req.url}]`);
  next();
}

function logSession(req, res, next) {
  if (config.get('logging.session')) Logger.info('Session logger:', req.session);
  next();
}

export {
  initLogging,
  logRequest,
  logSession
}
