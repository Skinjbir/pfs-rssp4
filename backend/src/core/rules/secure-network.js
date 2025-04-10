/**
 * Checks if a network security group (NSG) exposes critical ports.
 *
 * @param {Object} resource - The NSG resource object.
 * @param {Array} resource.rules - Array of security rules.
 * @returns {Object} Result indicating whether critical ports are publicly accessible.
 */
module.exports = async function checkNSGRules(resource) {
  if (!resource || !Array.isArray(resource.rules)) {
    return {
      pass: true,
      message: "No NSG rules to check or invalid resource format.",
    };
  }

  const CRITICAL_PORTS = [22, 3389];

  const hasPublicPort = resource.rules.some((rule) => {
    const isAllowRule = rule.access === "Allow";
    const isCriticalPort = CRITICAL_PORTS.includes(Number(rule.port));
    const isFromAnySource = ["*", "0.0.0.0/0"].includes(rule.source || "*");

    return isAllowRule && isCriticalPort && isFromAnySource;
  });

  return {
    pass: !hasPublicPort,
    message: hasPublicPort
      ? "⚠️ Critical ports (22/3389) are publicly accessible ❌"
      : "✅ No critical ports exposed to the public.",
  };
};
