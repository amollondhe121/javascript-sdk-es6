/**
 * Verbwire API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VerbwireApiDocumentation);
  }
}(this, function(expect, VerbwireApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VerbwireApiDocumentation.Body20();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body20', function() {
    it('should create an instance of Body20', function() {
      // uncomment below and update the code to test Body20
      //var instane = new VerbwireApiDocumentation.Body20();
      //expect(instance).to.be.a(VerbwireApiDocumentation.Body20);
    });

    it('should have the property contractAddress (base name: "contractAddress")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instane = new VerbwireApiDocumentation.Body20();
      //expect(instance).to.be();
    });

    it('should have the property newOperatorAddress (base name: "newOperatorAddress")', function() {
      // uncomment below and update the code to test the property newOperatorAddress
      //var instane = new VerbwireApiDocumentation.Body20();
      //expect(instance).to.be();
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instane = new VerbwireApiDocumentation.Body20();
      //expect(instance).to.be();
    });

  });

}));
