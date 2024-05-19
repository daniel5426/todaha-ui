import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  OrganizationReaderModelContract,
  UserReaderModelContract, UserUpdaterModelContract,
  UserWriterModelContract
} from '@guppy/identities/openapi';
import { AppMessage } from '@guppy/tiveriad/ui';

export const UserProfileServicesActions = createActionGroup({
  source: 'UserProfile Services',
  events: {
    'CurrentUser Get Success': props<{ user: UserReaderModelContract }>(),
    'CurrentUser Get Fail': props<{ message: AppMessage }>(),
    'CurrentUser Update Success': props<{ message: AppMessage }>(),
    'CurrentUser Update Fail': props<{ message: AppMessage }>()
  },
});

export const UserProfileDetailActions = createActionGroup({
  source: 'UserProfile Detail',
  events: {
    'Initialize': props<{ currentId: string }>(),
    'Update': props<{ writerModel: UserUpdaterModelContract }>()
  },
});

