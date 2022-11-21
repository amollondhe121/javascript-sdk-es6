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
    instance = new VerbwireApiDocumentation.CollectionDataFloorSale();
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

  describe('CollectionDataFloorSale', function() {
    it('should create an instance of CollectionDataFloorSale', function() {
      // uncomment below and update the code to test CollectionDataFloorSale
      //var instane = new VerbwireApiDocumentation.CollectionDataFloorSale();
      //expect(instance).to.be.a(VerbwireApiDocumentation.CollectionDataFloorSale);
    });

    it('should have the property _1day (base name: "1day")', function() {
      // uncomment below and update the code to test the property _1day
      //var instane = new VerbwireApiDocumentation.CollectionDataFloorSale();
      //expect(instance).to.be();
    });

    it('should have the property _7day (base name: "7day")', function() {
      // uncomment below and update the code to test the property _7day
      //var instane = new VerbwireApiDocumentation.CollectionDataFloorSale();
      //expect(instance).to.be();
    });

    it('should have the property _30day (base name: "30day")', function() {
      // uncomment below and update the code to test the property _30day
      //var instane = new VerbwireApiDocumentation.CollectionDataFloorSale();
      //expect(instance).to.be();
    });

  });

}));