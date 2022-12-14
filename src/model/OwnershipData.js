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

/**
* The OwnershipData model module.
* @module model/OwnershipData
* @version 1.0.0
*/
export default class OwnershipData {
    /**
    * Constructs a new <code>OwnershipData</code>.
    * @alias module:model/OwnershipData
    * @class
    */

    constructor() {
        
        OneOfinlineResponse20010TransfersResultsItems.call(this);
        
    }

    /**
    * Constructs a <code>OwnershipData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OwnershipData} obj Optional instance to populate.
    * @return {module:model/OwnershipData} The populated <code>OwnershipData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnershipData();
                        
            
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('tokenCount')) {
                obj['tokenCount'] = ApiClient.convertToType(data['tokenCount'], 'Number');
            }
            if (data.hasOwnProperty('floorAskPrice')) {
                obj['floorAskPrice'] = ApiClient.convertToType(data['floorAskPrice'], 'Number');
            }
            if (data.hasOwnProperty('onSaleCount')) {
                obj['onSaleCount'] = ApiClient.convertToType(data['onSaleCount'], 'Number');
            }
            if (data.hasOwnProperty('topBidValue')) {
                obj['topBidValue'] = ApiClient.convertToType(data['topBidValue'], 'Number');
            }
            if (data.hasOwnProperty('totalBidValue')) {
                obj['totalBidValue'] = ApiClient.convertToType(data['totalBidValue'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} address
    */
    'address' = undefined;
    /**
    * @member {String} chain
    */
    'chain' = undefined;
    /**
    * @member {String} contractId
    */
    'contractId' = undefined;
    /**
    * @member {String} slug
    */
    'slug' = undefined;
    /**
    * @member {Number} tokenCount
    */
    'tokenCount' = undefined;
    /**
    * @member {Number} floorAskPrice
    */
    'floorAskPrice' = undefined;
    /**
    * @member {Number} onSaleCount
    */
    'onSaleCount' = undefined;
    /**
    * @member {Number} topBidValue
    */
    'topBidValue' = undefined;
    /**
    * @member {Number} totalBidValue
    */
    'totalBidValue' = undefined;
    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {String} lastUpdated
    */
    'lastUpdated' = undefined;

    // Implement OneOfinlineResponse20010TransfersResultsItems interface:
    


}
