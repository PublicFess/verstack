'use strict';

var fs = require('fs')
  , path = require('path')
  , utils = require('../utils')
  , done = require('../done');


module.exports = exports = function(opts) {
  var prompt = require('prompt');
  prompt.message = 'init';
  prompt.start();
  prompt.get([
    {
      name: 'name',
      description: 'Directory and project name',
      required: true
    },

    {
      name: 'author',
      description: 'Author name',
      required: true
    },

    {
      name: 'staticUrl',
      description: 'Url for static files',
      required: true
    }
  ], function(err, results) {
    if (err) return done(err);
    var archetype = path.join(__dirname, '../../archetype');
    var dir = path.join(process.cwd(), results.name);
    if (fs.existsSync(dir)) {
      return done(new Error(dir + ' directory has already created.'))
    }
    utils.copy(archetype, dir, results, done);
  });

};
