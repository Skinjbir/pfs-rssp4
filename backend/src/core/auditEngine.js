const staticAudit = require('./staticAudit');
const dynamicAudit = require('./dynamicAudit');


/**
 * Executes the audit engine based on the specified audit type and data.
 *
 * @async
 * @function runAuditEngine
 * @param {string} auditType - The type of audit to perform. Can be 'static' or 'dynamic'.
 * @param {Object} auditData - The data to be analyzed by the audit engine.
 * @returns {Promise<any>} The result of the audit analysis.
 * @throws {Error} Throws an error if the audit type is invalid.
 */


const runAuditEngine = async (auditType, auditData) => {
    // Check if the audit type is 'static' and perform static analysis
    if (auditType == 'static') return await staticAudit.analyze(auditData);


    // Check if the audit type is 'dynamic' and perform dynamic analysis
    if (auditType == 'dynamic') return await dynamicAudit.analyze(auditData);

    // Throw an error if the audit type is neither 'static' nor 'dynamic'
    throw new Error('Invalid audit type'); 
}

runAuditEngine('static', 's');
runAuditEngine('dynamic', 's')
module.exports = runAuditEngine;
