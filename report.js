const newman = require('newman');
require('dotenv').config();

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/31309464-27e718f3-3d58-4c24-b371-2f1ada4d054c?access_key=PMAT-01HG7HZJSASY6KTV238XDR8DNM`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});