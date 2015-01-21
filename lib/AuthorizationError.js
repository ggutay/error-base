module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./Error');

  var $ = function AuthorizationError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();