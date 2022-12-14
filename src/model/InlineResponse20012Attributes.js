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

import ApiClient from '../ApiClient';
import ModelObject from './ModelObject';

/**
* The InlineResponse20012Attributes model module.
* @module model/InlineResponse20012Attributes
* @version 1.0.0
*/
export default class InlineResponse20012Attributes {
    /**
    * Constructs a new <code>InlineResponse20012Attributes</code>.
    * @alias module:model/InlineResponse20012Attributes
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse20012Attributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20012Attributes} obj Optional instance to populate.
    * @return {module:model/InlineResponse20012Attributes} The populated <code>InlineResponse20012Attributes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012Attributes();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [OneOfinlineResponse20012AttributesResultsItems]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ModelObject>} results
    */
    'results' = undefined;
    /**
    * @member {Number} page
    */
    'page' = undefined;
    /**
    * @member {Number} limit
    */
    'limit' = undefined;
    /**
    * @member {Number} totalPages
    */
    'totalPages' = undefined;
    /**
    * @member {Number} totalResults
    */
    'totalResults' = undefined;




}
