'use strict';

// NOTE: This is not a working example, but should be working soon!

var util = require('util');
var Validator = require('../lib/validator');

// Address, to be embedded on Person
var addressSchema = {
  "id": "Simple#Address",
  "type" : "object",
  "properties": {
    "lines": {
      "type": "array",
      "items": {"type": "string"}
    },
    "zip": {"type": "string"},
    "city": {"type": "string"},
    "country": {"type": "string"}
  }
};

// Person model
var schema = {
  "id": "Simple#Person",
  "type" : "object",
  "properties": {
    "name": {"type": "string"},
    "address": {"$ref": "Simple#Address"}
  }
};

var p = {
  "name": "Barack Obama",
  "address": {
    "lines": [ "1600 Pennsylvania Avenue Northwest" ],
    "zip": "DC 20500",
    "city": "Washington",
    "country": 1
  }
};

var v = new Validator();
v.addSchema(addressSchema, 'Simple#Address');

console.log(v.validate(p, schema));
