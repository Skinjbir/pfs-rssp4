

const rules = require('./rules.json');


const showRules = (rules) => {
    rules.forEach(rule => {
        console.log(`Rule's id:\t ${rule.id}`);
        console.log(`Description:\t ${rule.description}`);
        console.log(`Severity:\t ${rule.severity}`);
        console.log(`Recommendation:\t ${rule.recommendation}`);
        console.log('---');
    });
}



console.log(showRules(rules));