const { connect } = require('./connect');
const { getDevices } = require('./getDevices');

/**
 * @description Add ability to control a Philips Hue light
 * @param {Object} gladys - Gladys instance.
 * @param {Object} TuyaWebApi - Philips Hue Client.
 * @param {string} serviceId - UUID of the service in DB.
 * @example
 * const exampleLightHandler = new ExampleLightHandler(gladys, client, serviceId);
 */
const SmartLifeDeviceHandler = function SmartLifeDeviceHandler(gladys, TuyaWebApi, serviceId) {
    this.gladys = gladys;
    this.TuyaWebApi = TuyaWebApi;
    this.serviceId = serviceId;
    this.devices = [];
  };
  
SmartLifeDeviceHandler.prototype.connect = connect;
SmartLifeDeviceHandler.prototype.getDevices = getDevices;
module.exports = SmartLifeDeviceHandler;
