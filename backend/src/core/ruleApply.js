const fs = require('fs');
const path = require('path');

// Load rules once (optional: or pass them as a param)
const rules = require('../data/rules.json');
/**
 * Asynchronously checks a resource against a set of rules and generates a report.
 *
 * @param {Object} resource - The resource to be checked.
 * @param {string} resource.type - The type of the resource.
 * @param {string} resource.name - The name of the resource.
 * @param {Array<Object>} rules - An array of rule objects to apply to the resource.
 * @param {string} rules[].id - The unique identifier of the rule.
 * @param {string} rules[].label - A descriptive label for the rule.
 * @param {string} rules[].target - The target resource type for the rule.
 * @param {string} rules[].file - The filename of the rule's implementation script.
 * @returns {Promise<Array>} A promise that resolves to a report array containing the results of the rule checks.
 */
const check = async (resource, rules) => {
    const report = [];

    for (const rule of rules) {
        // Only apply rule if it targets this resource type
        if (rule.target !== resource.type) continue;

        try {
            const scriptPath = path.join(__dirname, '../core/rules', rule.file);
            const ruleFn = require(scriptPath);
            const result = await ruleFn(resource);

            report.push({
                ruleId: rule.id,
                ruleLabel: rule.label,
                passed: result.pass,
                message: result.message || null
            });
        } catch (err) {
            console.error(`Error running rule ${rule.id}:`, err.message);
            report.push({
                ruleId: rule.id,
                ruleLabel: rule.label,
                passed: false,
                message: `Error executing rule: ${err.message}`
            });
        }
    }

    return {report};
};


// Apply all matching rules to a given resource
const applyRules = async (resource) => {
    const { report } = await check(resource, rules);
    console.log("this is the generated report", report);
    return { report };
};

module.exports = { applyRules };
