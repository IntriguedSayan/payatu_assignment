// services/routerService.js
const axios = require("axios");

exports.getRouterMetadata = async ({ username, password }) => {
  try {
    // Step 1: Authenticate
    const loginRes = await axios.post(
      "https://wifi-admin.netlify.app/api/login",
      {
        username,
        password,
      }
    );

    const token = loginRes.data.token;

    // Step 2: Fetch metadata
    const configRes = await axios.get(
      "https://wifi-admin.netlify.app/api/router-config",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = configRes.data;

    return {
      wifiEnabled: data.wifiSettings.enabled,
      ssid: data.wifiSettings.ssid,
      firewallStatus: data.securitySettings.firewallEnabled
        ? "Enabled"
        : "Disabled",
      connectedDevicesCount: data.connectedDevices.length,
      ipAddress: data.networkSettings.ipAddress,
      dns: [data.networkSettings.primaryDNS, data.networkSettings.secondaryDNS],
    };
  } catch (err) {
    console.error("Error fetching router metadata:", err.message);
    throw new Error("Failed to fetch router metadata.");
  }
};

exports.performRouterAction = async ({ username, password, action }) => {
  try {
    // Authenticate
    const loginRes = await axios.post(
      "https://wifi-admin.netlify.app/api/login",
      {
        username,
        password,
      }
    );

    const token = loginRes.data.token;

    // Handle different actions
    if (action === "toggleFirewall") {
      const toggleRes = await axios.post(
        "https://wifi-admin.netlify.app/api/toggle-firewall",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        message: toggleRes.data.message,
        firewallEnabled: toggleRes.data.firewallEnabled,
      };
    } else {
      throw new Error("Unsupported action: " + action);
    }
  } catch (err) {
    console.error("Error performing router action:", err.message);
    throw new Error("Failed to perform router action.");
  }
};
