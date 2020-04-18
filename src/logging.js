import bunyan from "bunyan";
import config from "config";
import morgan from "morgan";

export const logger = bunyan.createLogger({ name: "browser" });

export const logRequest = morgan(config.get("logging.format"));

export const logResponse = (req, res, next) => {
  logger.info("Will log response at end of request");
  const oldWrite = res.write;
  const oldEnd = res.end;

  const chunks = [];

  res.write = (...restArgs) => {
    chunks.push(Buffer.from(restArgs[0]));
    oldWrite.apply(res, restArgs);
  };

  res.end = (...restArgs) => {
    if (restArgs[0]) {
      chunks.push(Buffer.from(restArgs[0]));
    }
    const body = Buffer.concat(chunks).toString("utf8");

    logger.info({
      time: new Date().toUTCString(),
      fromIP: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      method: req.method,
      originalUri: req.originalUrl,
      uri: req.url,
      headers: res.getHeaders(),
      requestData: req.body,
      responseData: body,
      referer: req.headers.referer || ""
    });

    // console.log(body);
    oldEnd.apply(res, restArgs);
  };

  next();
};
