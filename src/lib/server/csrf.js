import config from "config";
import csurf from "csurf";

const csrf = csurf({
  cookie: {
    domain: config.get("server.domain"),
    httpOnly: true,
    key: "session-" + config.get("server.domain"),
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: "lax",
    secure: !config.get("dev") || config.get("server.enableHttps")
  }
});

const csrfProtection = (req, res, next) => {
  const noCsrfRoutes = [
    "/api/payments/hooks",
    "/api/alexa",
    "/oauth/token",
    "/oauth/authorize"
  ];
  if (noCsrfRoutes.includes(req.path)) next();
  else csrf(req, res, next);
};

/**
 * Add the CSRF token to a cookie our JS can read.
 */
const exposeCsrfMiddleware = (req, res, next) => {
  if (req.csrfToken) {
    res.cookie("XSRF-TOKEN", req.csrfToken(), {
      domain: config.get("server.domain"),
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      name: "session-" + config.get("server.domain"),
      sameSite: "strict",
      secure: !config.get("dev") || config.get("server.enableHttps")
    });
  }
  next();
};

export { csrfProtection, exposeCsrfMiddleware };
