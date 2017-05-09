require('./config');
const coolClient = require('cool-entity').CoolClient;
const clog = require('fbkt-clog');

const allUsersQuery = require('./cool/query/allUsers')


function allUsers(){
  coolClient.query(allUsersQuery, {
    verbose: true
  })
    .then(result => {
      clog('RESULT', result);
    })
}

allUsers();