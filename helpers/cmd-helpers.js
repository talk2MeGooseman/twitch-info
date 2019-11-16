// eslint-disable-next-line no-unused-vars
const yargs = require('yargs');

/**
 * Builds params object from reqOptions and options
 *
 * @param {yargs.Argv} argv  Arguments from yargs
 * @param {Array<String>} reqOptions Required options for request
 * @param {Array<String>} [addOptions=null] Additional options for request
 * @returns
 */
exports.buildParams = (argv, reqOptions, addOptions = []) => {
  const params = new URLSearchParams();

  const foundRequired = reqOptions.find((opt) => {
    if (argv[opt] && argv[opt].length > 0) {
      params.append(opt, argv[opt]);
      return true;
    }
    return false;
  });

  if (reqOptions.length > 0 && !foundRequired) {
    console.log(reqOptions.join(' or '), 'option is required, use --help for more details.');
    return null;
  }

  addOptions.forEach((opt) => {
    if (argv[opt] && argv[opt].length > 0) {
      params.append(opt, argv[opt]);
    }
  });

  return params;
};
