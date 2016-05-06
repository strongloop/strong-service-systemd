// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: strong-service-systemd
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

var fs = require('fs');

module.exports = {
  fixture: readFixture
}

function readFixture(name) {
  var path = require.resolve('./fixtures/' + name);
  return fs.readFileSync(path, 'utf8');
}
