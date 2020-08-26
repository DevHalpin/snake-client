let connection;
const constants = require('./constants')

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  })
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  else {
    for (cKey in constants) {
      if (constants[cKey] === key) {
        connection.write(constants.MAPPINGS[cKey])
      }
    }
  }
}

module.exports = {
  setupInput
}