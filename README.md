execCommand [![NPM version](https://badge.fury.io/js/execcommand.svg)](http://badge.fury.io/js/execcommand) [![execcommand API Documentation](https://www.omniref.com/js/npm/execcommand.png)](https://www.omniref.com/js/npm/execcommand)
==============

A very simple wrapper for executing a system command in NodeJS, synchronously!

The wrapper is using https://github.com/hecomi/node-execsync.

Example
=======
```javascript
var execCommand = require("execCommand.js");
var command = execCommand("cat /sys/class/thermal/thermal_zone0/temp");
console.log(command);
```
