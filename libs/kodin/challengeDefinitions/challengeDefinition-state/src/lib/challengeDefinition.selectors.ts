import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ChallengeDefinitionComponentState } from "./challengeDefinition.state";

export const selectChallengeDefinitionState =
  createFeatureSelector<ChallengeDefinitionComponentState>('challengeDefinitionComponentState');

export const selectPagedResultValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.pagedResult
  );


export const selectReadModelValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.readerModel
  );

export const selectQueryValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.query
  );


export const selectLoadingValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.loading
  );


export const selectCurrentIdValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.currentId
  );


export const selectEditModeValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.editMode
  );


export const selectMessageValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.message
  );

  export const selectTitleValue =
  createSelector(
    selectChallengeDefinitionState,
    (state: ChallengeDefinitionComponentState) => state.title
  );
