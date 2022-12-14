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
    instance = new VerbwireApiDocumentation.StoreApi();
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

  describe('StoreApi', function() {
    describe('nftStoreFileFromUrlPost', function() {
      it('should call nftStoreFileFromUrlPost successfully', function(done) {
        //uncomment below and update the code to test nftStoreFileFromUrlPost
        //instance.nftStoreFileFromUrlPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftStoreFilePost', function() {
      it('should call nftStoreFilePost successfully', function(done) {
        //uncomment below and update the code to test nftStoreFilePost
        //instance.nftStoreFilePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftStoreMetadataFromImagePost', function() {
      it('should call nftStoreMetadataFromImagePost successfully', function(done) {
        //uncomment below and update the code to test nftStoreMetadataFromImagePost
        //instance.nftStoreMetadataFromImagePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftStoreMetadataFromImageUrlPost', function() {
      it('should call nftStoreMetadataFromImageUrlPost successfully', function(done) {
        //uncomment below and update the code to test nftStoreMetadataFromImageUrlPost
        //instance.nftStoreMetadataFromImageUrlPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftStoreUploadDirectoryPost', function() {
      it('should call nftStoreUploadDirectoryPost successfully', function(done) {
        //uncomment below and update the code to test nftStoreUploadDirectoryPost
        //instance.nftStoreUploadDirectoryPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
