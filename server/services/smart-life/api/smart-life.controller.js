const asyncMiddleware = require('../../../api/middlewares/asyncMiddleware');

module.exports = function SmartLifeController(smartLifeHandler) {
  /**
   * @api {get} /api/v1/service/telegram/link Get custom link
   * @apiName getCustomLink
   * @apiGroup RtspCamera
   */
  async function getDevices(req, res) {
    const devices = await smartLifeHandler.getDevices();
    res.json(devices);
  }

  return {
    'get /api/v1/service/smart-life/devices': {
      authenticated: true,
      controller: asyncMiddleware(getDevices),
    },
  };
};
