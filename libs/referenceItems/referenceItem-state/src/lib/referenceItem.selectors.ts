import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReferenceItemComponentState } from "./referenceItem.state";

export const selectReferenceItemState =
  createFeatureSelector<ReferenceItemComponentState>('referenceItemComponentState');

export const selectPagedResultValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.pagedResult
  );


export const selectReadModelValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.readerModel
  );

export const selectQueryValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.query
  );


export const selectLoadingValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.loading
  );


export const selectCurrentIdValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.currentId
  );


export const selectEditModeValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.editMode
  );


export const selectMessageValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.message
  );

  export const selectTitleValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.title
  );



export const selectReferenceItemRouteValue =
  createSelector(
    selectReferenceItemState,
    (state: ReferenceItemComponentState) => state.referenceItemRoute
  );

export const selectReferenceItemRouteWithCurrentIdValue =
  createSelector(
    selectReferenceItemState,
    // eslint-disable-next-line no-unused-labels
    (state: ReferenceItemComponentState) => {
        const result = {referenceItemRoute:state.referenceItemRoute, currentId:state.currentId}
        return result;
     }
  );

