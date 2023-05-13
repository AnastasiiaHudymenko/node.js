const checkExtation = (fileName) => {
  const EXTATION = ["txt", "js", "json", "html", "css"];

  const arr = fileName.split(".");
  const extation = arr[arr.length - 1];

  const data = {
    extation,
    result: EXTATION.includes(extation),
  };

  return data;
};

module.exports = { checkExtation };
