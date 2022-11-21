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
    instance = new VerbwireApiDocumentation.Body18();
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

  describe('Body18', function() {
    it('should create an instance of Body18', function() {
      // uncomment below and update the code to test Body18
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be.a(VerbwireApiDocumentation.Body18);
    });

    it('should have the property sourceChain (base name: "sourceChain")', function() {
      // uncomment below and update the code to test the property sourceChain
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be();
    });

    it('should have the property destChain (base name: "destChain")', function() {
      // uncomment below and update the code to test the property destChain
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "tokenId")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be();
    });

    it('should have the property sourceWalletAddress (base name: "sourceWalletAddress")', function() {
      // uncomment below and update the code to test the property sourceWalletAddress
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be();
    });

    it('should have the property recipientWalletAddress (base name: "recipientWalletAddress")', function() {
      // uncomment below and update the code to test the property recipientWalletAddress
      //var instane = new VerbwireApiDocumentation.Body18();
      //expect(instance).to.be();
    });

  });

}));