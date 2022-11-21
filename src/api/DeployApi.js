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

import ApiClient from "../ApiClient";
import InlineResponse20014 from '../model/InlineResponse20014';
import InlineResponse400 from '../model/InlineResponse400';

/**
* Deploy service.
* @module api/DeployApi
* @version 1.0.0
*/
export default class DeployApi {

    /**
    * Constructs a new DeployApi. 
    * @alias module:api/DeployApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the nftDeployDeployCollectionContractPost operation.
     * @callback module:api/DeployApi~nftDeployDeployCollectionContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy a Collection Contract
     * Deploy a collection contract in seconds. You can deploy any of the provided three types of contracts (i) A standard ERC721 collection contract (ii) An ERC721A collection contract (iii) An Omnichain ERC721 contract. Note, an Omni chain contract gives you the the ability to send your NFTs across different blockchains
     * @param {module:api/DeployApi~nftDeployDeployCollectionContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */
    nftDeployDeployCollectionContractPost(contractName, contractSymbol, recipientAddress, chain, contractType, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'contractName': contractName,
        'contractSymbol': contractSymbol,
        'recipientAddress': recipientAddress,
        'chain': chain,
        'contractType': contractType
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/nft/deploy/deployCollectionContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDeployDeployCustomContractPost operation.
     * @callback module:api/DeployApi~nftDeployDeployCustomContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy a Custom Contract
     * Deploy a custom omnichain contract in seconds. A custom contract is different from a collection contract. Use a custom contract for providing NFT functionality in your applications.
     * @param {module:api/DeployApi~nftDeployDeployCustomContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */
    nftDeployDeployCustomContractPost(contractName, contractSymbol, recipientAddress, chain, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'contractName': contractName,
        'contractSymbol': contractSymbol,
        'recipientAddress': recipientAddress,
        'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/nft/deploy/deployCustomContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftUpdateInitCollectionContractPost operation.
     * @callback module:api/DeployApi~nftUpdateInitCollectionContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initialize your collection contract
     * Set the parameters of your deployed collection contract
     * @param {module:api/DeployApi~nftUpdateInitCollectionContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */
    nftUpdateInitCollectionContractPost(contractAddress, maxMintPerAddress, totalReserveQty, totalAllowlistQty, maxSupply, maxMintableBatchSize, royaltiesInBps, royaltiesAddress, ownerAddress, tokenURIPrereveal, baseTokenURI, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, recipientAddress, chain, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'contractAddress': contractAddress,
        'maxMintPerAddress': maxMintPerAddress,
        'totalReserveQty': totalReserveQty,
        'totalAllowlistQty': totalAllowlistQty,
        'maxSupply': maxSupply,
        'maxMintableBatchSize': maxMintableBatchSize,
        'royaltiesInBps': royaltiesInBps,
        'royaltiesAddress': royaltiesAddress,
        'ownerAddress': ownerAddress,
        'tokenURIPrereveal': tokenURIPrereveal,
        'baseTokenURI': baseTokenURI,
        'allowListMintStartTime': allowListMintStartTime,
        'publicSaleStartTime': publicSaleStartTime,
        'allowlistMintPriceInWei': allowlistMintPriceInWei,
        'publicPriceInWei': publicPriceInWei,
        'metadataFrozen': metadataFrozen,
        'recipientAddress': recipientAddress,
        'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/nft/update/initCollectionContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
