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
import FloorPrice from './FloorPrice';

/**
* The InlineResponse2004 model module.
* @module model/InlineResponse2004
* @version 1.0.0
*/
export default class InlineResponse2004 {
    /**
    * Constructs a new <code>InlineResponse2004</code>.
    * @alias module:model/InlineResponse2004
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2004} obj Optional instance to populate.
    * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();
                        
            
            if (data.hasOwnProperty('floorPrices')) {
                obj['floorPrices'] = FloorPrice.constructFromObject(data['floorPrices']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/FloorPrice} floorPrices
    */
    'floorPrices' = undefined;




}
