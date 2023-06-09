const argv = require("yargs").argv;

const { createFile } = require("./files");

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case "create":
      createFile(fileName);
      break;

    case "":
      break;

    case "":
      break;

    case "":
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
