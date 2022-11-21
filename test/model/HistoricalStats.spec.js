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
    instance = new VerbwireApiDocumentation.HistoricalStats();
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

  describe('HistoricalStats', function() {
    it('should create an instance of HistoricalStats', function() {
      // uncomment below and update the code to test HistoricalStats
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be.a(VerbwireApiDocumentation.HistoricalStats);
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property contractId (base name: "contractId")', function() {
      // uncomment below and update the code to test the property contractId
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property floorSale (base name: "floorSale")', function() {
      // uncomment below and update the code to test the property floorSale
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property salesCount (base name: "salesCount")', function() {
      // uncomment below and update the code to test the property salesCount
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new VerbwireApiDocumentation.HistoricalStats();
      //expect(instance).to.be();
    });

  });

}));
