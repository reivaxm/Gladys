/**
 * @description Get devices from all connected bridges.
 * @returns {Promise<Array>} Resolve with array of devices.
 * @example
 * getDevices();
 */
async function getDevices() {
    const devicesToReturn = [];
    await this.api.discoverDevices().then(devices => {
        devices.forEach((device) => {
            if (Object.keys(device.data).length === 0) {
                return;
            }
            devicesToReturn.push({
                id: device.id,
                name: device.name,
                type: device.dev_type,
                icon: device.icon,
                support_stop: device.data.support_stop,
            });
        });
    });
  
    return devicesToReturn;
  }
  
  module.exports = {
    getDevices,
  };