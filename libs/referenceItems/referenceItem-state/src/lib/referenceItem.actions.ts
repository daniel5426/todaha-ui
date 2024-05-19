import { ReferenceItemQueryModel } from '@guppy/referenceItems/domain';
import { ReferenceInternationalizedItemReaderModelContract, ReferenceItemReaderModelContractPagedResult, ReferenceItemWriterModelContract } from '@guppy/referenceItems/openapi';
import { AppMessage } from '@guppy/tiveriad/ui';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ReferenceItemListActions = createActionGroup({
  source: 'ReferenceItem List',
  events: {
    'Update Orders':  props<{ query: ReferenceItemQueryModel }>(), //CALL API
    'Add':  emptyProps(),
    'Edit': props<{ id: string }>(),
  },
});

export const ReferenceItemSearchListActions = createActionGroup({
  source: 'ReferenceItem Searchlist',
  events: {
    'Initialize':  props<{ referenceItemRoute: string, title:string }>(),
  }
});

export const ReferenceItemSearchbarActions = createActionGroup({
  source: 'ReferenceItem Searchbar',
  events: {
    'Update query':  props<{ query: ReferenceItemQueryModel }>(), //CALL API
  }
});

export const ReferenceItemDetailActions = createActionGroup({
  source: 'ReferenceItem Detail',
  events: {
    'Add': props<{ writerModel: ReferenceItemWriterModelContract }>(), //CALL API
    'Update': props<{ writerModel: ReferenceItemWriterModelContract }>(), //CALL API
    'Cancel': emptyProps(),
  },
});

export const ReferenceItemServicesActions = createActionGroup({
  source: 'ReferenceItem Services',
  events: {
    'ReferenceItem Add Success': props<{ message: AppMessage }>(),
    'ReferenceItem Add Fail': props<{ message: AppMessage }>(),
    'ReferenceItem GetById Success': props<{ item: ReferenceInternationalizedItemReaderModelContract }>(),
    'ReferenceItem GetById Fail': props<{ message: AppMessage }>(),
    'ReferenceItem Update Success': props<{ message: AppMessage }>(),
    'ReferenceItem Update Fail': props<{ message: AppMessage }>(),
    'ReferenceItem GetAll Success': props<{ pagedResult: ReferenceItemReaderModelContractPagedResult }>(),
    'ReferenceItem GetAll Fail': props<{ message: AppMessage }>(),
  },
});
