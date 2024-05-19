import { UserProfileState } from './userProfile.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserProfileState =
  createFeatureSelector<UserProfileState>('userProfileComponentState');

export const selectReaderModelValue =
  createSelector(
    selectUserProfileState,
    (state: UserProfileState) => state.readerModel
  );

export const selectCurrentIdValue =
  createSelector(
    selectUserProfileState,
    (state: UserProfileState) => state.currentId
  );

export const selectWriterModelValue =
  createSelector(
    selectUserProfileState,
    (state: UserProfileState) => state.writerModel
  );



export const selectMessageValue =
  createSelector(
    selectUserProfileState,
    (state: UserProfileState) => state.message
  );

export const selectLoadingValue =
  createSelector(
    selectUserProfileState,
    (state: UserProfileState) => state.loading
  );

