import { logger } from "src/logging";
import { createHandler } from "src/routes/api/alexa/_utilities";

const ErrorHandler = createHandler({
  name: "ErrorHandler",
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    // TODO(kyle): This is stupid and needs help
    logger.info(error, "Alexa error handled");

    return handlerInput.responseBuilder
      .speak("Sorry, I can't understand the command. Please say again.")
      .reprompt("Sorry, I can't understand the command. Please say again.")
      .getResponse();
  }
});

export default ErrorHandler;
