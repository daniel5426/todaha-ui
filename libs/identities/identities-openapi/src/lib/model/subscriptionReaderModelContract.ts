/**
 * Identities.Services
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SubscriptionState } from './subscriptionState';
import { OrganizationReduceModelContract } from './organizationReduceModelContract';
import { AppReduceModelContract } from './appReduceModelContract';


export interface SubscriptionReaderModelContract { 
    id?: string | null;
    state?: SubscriptionState;
    start?: string;
    end?: string;
    createdBy?: string | null;
    created?: string | null;
    lastModifiedBy?: string | null;
    lastModified?: string | null;
    app?: AppReduceModelContract;
    organization?: OrganizationReduceModelContract;
}
export namespace SubscriptionReaderModelContract {
}


