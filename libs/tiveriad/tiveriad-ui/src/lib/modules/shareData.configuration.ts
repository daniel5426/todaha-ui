import { getAllDelegate, searchDelegate } from './shareData.module';


export interface ShareDataServiceConfiguration {
  key: string;
  getAll: getAllDelegate;
  search: searchDelegate;
}
