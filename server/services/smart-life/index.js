const logger = require('../../utils/logger');
const { ServiceNotConfiguredError } = require('../../utils/coreErrors');
const SmartLifeHandler = require('./lib');
const SmartLifeController = require('./api/smart-life.controller');

module.exports = function TuyaService(gladys, serviceId) {
  const TuyaWebApi = require('homebridge-tuya-web/lib/tuyawebapi');
  const smartLifeHandler = new SmartLifeHandler(gladys, TuyaWebApi, serviceId);
  /**
   * @public
   * @description This function starts the TuyaService
   * @example
   * gladys.services.smart-life.start();
   */
  async function start() {
    logger.info('Starting SmartLife service');
    const region = await gladys.variable.getValue('TUYA_API_REGION', serviceId);
    const login = await gladys.variable.getValue('TUYA_API_LOGIN', serviceId);
    const passwd = await gladys.variable.getValue('TUYA_API_PASSWD', serviceId);
    if (!region) {
      throw new ServiceNotConfiguredError('No tuya api region found. Not starting smartlife service');
    }
    if (!login) {
      throw new ServiceNotConfiguredError('No tuya api login found. Not starting smartlife service');
    }
    if (!passwd) {
      throw new ServiceNotConfiguredError('No tuya api passwd found. Not starting smartlife service');
    }
    await smartLifeHandler.connect(region, login, passwd);
  }

  /**
   * @public
   * @description This function stops the TuyaService
   * @example
   * gladys.services.smart-life.stop();
   */
  async function stop() {
    logger.log('stopping SmartLife service');
  }

  return Object.freeze({
    start,
    stop,
    device: smartLifeHandler,
    controllers: SmartLifeController(smartLifeHandler),
  });
};
