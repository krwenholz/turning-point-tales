import {parseInt, slice} from 'lodash';

const SPACE_AROUND_ERROR = 5;

export const getSyntaxError = (error, data) => {
  const lines = data
  .split("\n")
  .filter(Boolean)
  .map((line, idx) => `${idx + 1}: ${line}`);

  const potentialErrorLine = parseInt(error.message.match(/line\s(\d+)/)[1]);

  if(potentialErrorLine) {
    return "Looks like there was an error in your yaml file:\n\n\n" +
      `${error.message}\n\n` +
      slice(
        lines,
        potentialErrorLine - SPACE_AROUND_ERROR,
        potentialErrorLine + SPACE_AROUND_ERROR
      ).join("\n");
  }

  return error.message;
};
