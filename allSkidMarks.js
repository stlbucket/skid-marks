require('./config');
const coolClient = require('cool-entity').CoolClient;
const clog = require('fbkt-clog');

const allSkidMarksQuery = require('./cool/query/allSkidMarks')


function allSkidMarks(){
  coolClient.query(allSkidMarksQuery, {
    verbose: true
  })
    .then(result => {
      clog('RESULT', result);
    })
}

allSkidMarks();