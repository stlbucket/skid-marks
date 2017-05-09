require('./config');
const coolClient = require('cool-entity').CoolClient;
const clog = require('fbkt-clog');
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  {name: 'name', type: String}
];

const options = commandLineArgs(optionDefinitions);

const createSkidMarkMutation = require('./cool/mutation/createSkidMark')

clog('COMMAND LINE OPTIONS', options);


function createSkidMark(name){
  coolClient.mutate(createSkidMarkMutation, {
    variables: {
      "foundByUserId": "cj2h39splwlue0127spknx8iv", // this is hard-coded user right now
      "name": name
    },
    verbose: true
  })
    .then(result => {
      clog('NEW SKIDMARK RESULT', result);
    })
}

createSkidMark(options.name);