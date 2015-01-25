module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./AuthorizationError');

  var $ = function UnauthorizedError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();