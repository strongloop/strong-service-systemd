# strong-service-systemd

Generate an systemd service using the provided parameters.

## Install

`npm install strong-service-systemd`

## Basic Usage

```js
var fs = require('fs');
var systemd = require('strong-service-systemd');

// Generate systemd service for my-app
systemd({name: 'my-app'}, function(err, service) {
  fs.writeFile('/etc/systemd/system/my-app.service', service, function(err) {
    if (err) return console.error(err);
  });
});

// Also supports synchronous mode
fs.writeFileSync('/etc/systemd/system/my-app.service', systemd({name: 'my-app'}));
```

## Options

This module supports a subset of those used in the node-linux templates:

 * `name` - name of service.
   `name` is an alias for `label` and `servicesummary`.
 * `description` - multi-word description of service. `description` is an
   alias for `servicedescription`.
 * `author` - sets author field of systemd job (defaults to current user)
 * `cwd` - working directory to run service from (defaults to `/`)
 * `user` - user to run service as (defaults to `nodbody`)
 * `group` - group to run service as (defaults to `nogroup`)
 * `execpath` - path to binary to executable
 * `script` - arguments to execpath (such as a script)
 * `created` - timestamp used in generated job (defaults to current time)
 * `env` - environment variables to set in systemd job
 * `template` - override internal template

## Template Format

Templates use [_.template](http://lodash.com/docs#template) from Lodash using
EJS style syntax: `<%= option %>`.
