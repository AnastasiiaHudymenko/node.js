const fs = require("fs/promises");

const path = require("path");

const chalk = require("chalk");

const dataValidator = require("./helpers/dataValidator");

const createFile = async (fileName, content) => {
  const data = {
    fileName,
    content,
  };

  const result = dataValidator(data);

  console.log(result.error.details[0]);

  if (result.error) {
    console.log(
      chalk.red(`Please specify ${result.error.details[0].path} parameter`)
    );
  }
  try {
  } catch (error) {}
};

module.exports = {
  createFile,
};
