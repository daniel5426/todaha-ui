import {  ReferenceItemQueryModel } from "@guppy/referenceItems/domain";
import {  ComponentState } from "@guppy/tiveriad/ui";
import { ReferenceInternationalizedItemReaderModelContract, ReferenceItemReaderModelContract, ReferenceItemReaderModelContractPagedResult, ReferenceItemWriterModelContract } from "@guppy/referenceItems/openapi";

export interface ReferenceItemComponentState extends
    ComponentState<
      ReferenceItemReaderModelContractPagedResult,
      ReferenceItemReaderModelContract,
      ReferenceInternationalizedItemReaderModelContract,
      ReferenceItemWriterModelContract,
      ReferenceItemQueryModel>
{
  referenceItemRoute:string,
}

export const INITIAL_QUERY: ReferenceItemQueryModel = {
  id: "",
  key: "",
  value: "",
  page: 1,
  limit: 50,
  q: "",
  orders: []
};

