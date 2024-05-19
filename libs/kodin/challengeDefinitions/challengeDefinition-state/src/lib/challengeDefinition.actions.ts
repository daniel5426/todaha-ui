import { ChallengeDefinitionReaderModelContract, ChallengeDefinitionReaderModelContractPagedResult, ChallengeDefinitionWriterModelContract } from '@guppy/kodin/openapi';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ChallengeDefinitionQueryModel } from '@guppy/kodin/challengeDefinitions/domain';
import { AppMessage } from '@guppy/tiveriad/ui';

export const ChallengeDefinitionListActions = createActionGroup({
  source: 'ChallengeDefinition List',
  events: {
    'Update Orders':  props<{ query: ChallengeDefinitionQueryModel }>(), //CALL API
    'Add':  emptyProps(),
    'Edit': props<{ id: string }>(),
  },
});


export const ChallengeDefinitionSearchbarActions = createActionGroup({
  source: 'ChallengeDefinition Searchbar',
  events: {
    'Update query':  props<{ query: ChallengeDefinitionQueryModel }>(), //CALL API
  }
});

export const ChallengeDefinitionDetailActions = createActionGroup({
  source: 'ChallengeDefinition Detail',
  events: {
    'Add': props<{ writerModel: ChallengeDefinitionWriterModelContract }>(), //CALL API
    'Update': props<{ writerModel: ChallengeDefinitionWriterModelContract }>(), //CALL API
    'Cancel': emptyProps(),
  },
});

export const ChallengeDefinitionServicesActions = createActionGroup({
  source: 'ChallengeDefinition Services',
  events: {
    'ChallengeDefinition Add Success': props<{ message: AppMessage }>(),
    'ChallengeDefinition Add Fail': props<{ message: AppMessage }>(),
    'ChallengeDefinition GetById Success': props<{ item: ChallengeDefinitionReaderModelContract }>(),
    'ChallengeDefinition GetById Fail': props<{ message: AppMessage }>(),
    'ChallengeDefinition Update Success': props<{ message: AppMessage }>(),
    'ChallengeDefinition Update Fail': props<{ message: AppMessage }>(),
    'ChallengeDefinition GetAll Success': props<{ pagedResult: ChallengeDefinitionReaderModelContractPagedResult }>(),
    'ChallengeDefinition GetAll Fail': props<{ message: AppMessage }>(),
  },
});
