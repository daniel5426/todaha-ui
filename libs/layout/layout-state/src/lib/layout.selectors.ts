import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayoutState } from "./layout.state";

export const selectLayoutState =
  createFeatureSelector<LayoutState>('layout');

export const selectProfileSideBarMenuItems =
  createSelector(
    selectLayoutState,
    (state: LayoutState) => state.profileSideBarMenuItems
  );
