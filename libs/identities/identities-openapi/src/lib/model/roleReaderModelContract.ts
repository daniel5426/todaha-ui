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
import { OrganizationReduceModelContract } from './organizationReduceModelContract';


export interface RoleReaderModelContract { 
    id?: string | null;
    name?: string | null;
    description?: string | null;
    code?: string | null;
    createdBy?: string | null;
    created?: string | null;
    lastModifiedBy?: string | null;
    lastModified?: string | null;
    organization?: OrganizationReduceModelContract;
}

