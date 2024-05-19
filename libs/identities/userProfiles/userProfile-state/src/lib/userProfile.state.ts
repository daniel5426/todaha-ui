import {
  OrganizationReaderModelContract,
  UserReaderModelContract,
  UserUpdaterModelContract
} from '@guppy/identities/openapi';
import { AppMessage } from '@guppy/tiveriad/ui';

export interface UserProfileState
{
  currentId: string | null;
  readerModel: UserReaderModelContract|null;
  writerModel: UserUpdaterModelContract|null;
  message:AppMessage|null;
  loading:boolean;

}
