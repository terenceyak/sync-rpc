'use strict';

const getPort = require('get-port');

getPort({ port: 59045 })
  .then(port => process.stdout.write('' + port))
  .catch(err =>
    setTimeout(() => {
      throw err;
    }, 0)
  );
