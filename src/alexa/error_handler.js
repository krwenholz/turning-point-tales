import { logger } from "src/logging";

const ErrorHandler = {
  name: "ErrorHandler",
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    logger.info(error, "Alexa error handled");

    return handlerInput.responseBuilder
      .speak(
        "Sorry, I can't understand the command. Please say again or contact support at h2wib dot com if your problem continues."
      )
      .reprompt("Sorry, I can't understand the command. Please say again.")
      .getResponse();
  }
};

export default ErrorHandler;
