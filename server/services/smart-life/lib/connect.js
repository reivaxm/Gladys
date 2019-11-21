const logger = require('../../../utils/logger');

/**
 * @description Connect SmartLife (Tuya) API
 * @param {string} region - SmartLife API REGION.
 * @param {string} login - SmartLife API login (phone or mail).
 * @param {string} passwd - SmartLife API password.
 * @example
 * connect('test');
 */
async function connect(region, login, passwd) {
  this.api = new this.TuyaWebApi(login, passwd, region, 'smart_life');
  this.api.getOrRefreshToken().then((session) => {
      this.api.session = session || null;
  }).catch(err => {
    logger.debug(err);
  });
}

module.exports = {
  connect,
};
