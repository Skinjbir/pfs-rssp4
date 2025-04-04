const fs = require('fs');
const path = require('path');
const { applyRules } = require('./ruleApply');

/**
 * Audits static resources based on a configuration file.
 *
 * @async
 * @function
 * @param {string} configFilePath - The file path to the JSON configuration file containing resource definitions.
 * @returns {Promise<Object>} An object containing the audit summary:
 * - `total` {number}: Total number of resources audited.
 * - `passed` {number}: Number of resources that passed the audit.
 * - `failed` {number}: Number of resources that failed the audit.
 * - `details` {Array<Object>}: Detailed results for each resource.
 * @throws {Error} If there is an issue reading or parsing the configuration file.
 */


async function auditStatic(configFilePath) {
  try {
    const raw = fs.readFileSync(configFilePath, 'utf-8');
    const config = JSON.parse(raw);

    const auditResults = [];

    const resources = config.resources;

    for (const resource of resources) {
      const result = await applyRules(resource); 
    }

    return {
      total: auditResults.length,
      passed: auditResults.filter(result => result.status === 'passed').length,
      failed: auditResults.filter(result => result.status === 'failed').length,
      details: auditResults
    };
  } catch (err) {
    console.error('Erreur dans auditStatic:', err);
    throw err;
  }
}

module.exports = { auditStatic };
