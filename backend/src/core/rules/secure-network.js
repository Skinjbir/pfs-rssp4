module.exports = async function(resource) {
    if (!resource.rules || !Array.isArray(resource.rules)) {
      return { pass: true, message: "No NSG rules to check." };
    }
  
    const hasPublicPort = resource.rules.some(rule => {
      return (
        rule.access === "Allow" &&
        (rule.port === 22 || rule.port === 3389)
      );
    });
  
    return {
      pass: !hasPublicPort,
      message: hasPublicPort
        ? 'Critical port is publicly accessible ❌'
        : 'No critical ports exposed ✅'
    };
  };
  