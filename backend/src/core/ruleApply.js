const fs = require('fs');
const path = require('path');

// Load rules once (optional: or pass them as a param)
const rules = require('../data/rules.json');
const check = async (resource, rules) => {
    const report = [];

    for (const rule of rules) {
        // Log the check
        if (resource.type !== rule.target) {
            continue;
        }

        console.log("Checking:", resource.name, rule.id, "with label:", rule.label);

        // Only apply rule if it targets this resource type
        if (rule.target !== resource.type) continue;

        try {
            const scriptPath = path.join(__dirname, '../core/rules', rule.file);
            const ruleFn = require(scriptPath);
            const result = await ruleFn(resource);

            console.log(result);

        } catch (err) {
            console.error(`Error running rule ${rule.id}:`, err.message);
        }
    }

    return report;
};

// Apply all matching rules to a given resource
const applyRules = async (resource) => {
    const result = await check(resource, rules);

    return {

    };
};

module.exports = { applyRules };
