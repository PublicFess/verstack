'use strict';

module.exports = function (err) {
    if (err) {
      console.error(err);
      return process.exit(0)
    }
    process.exit(0);
};