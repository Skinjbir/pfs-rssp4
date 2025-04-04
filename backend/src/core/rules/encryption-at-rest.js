module.exports = async function(resource) {
    const pass = resource.encryption === true;
    return {
      pass,
      message: pass ? 'Encryption is enabled ✅' : 'Encryption is missing ❌'
    };
  };
  