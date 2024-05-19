import { UserProfileDetailActions, UserProfileServicesActions } from './userProfile.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = {
    currentId: '',
    readerModel: { },
    writerModel: {  },
    message: {},
    loading: false
}

export const userProfileReducer = createReducer(
    initialState,
    on(UserProfileServicesActions.currentUserGetSuccess, (state, { user }) => ({ ...state, readerModel: user,loading: false })),
    on(UserProfileServicesActions.currentUserGetFail, (state, { message }) => ({ ...state, message: message, loading: false })),
    on(UserProfileServicesActions.currentUserUpdateSuccess, (state, { message }) => ({ ...state, message: message, loading: false })),
    on(UserProfileServicesActions.currentUserUpdateFail, (state, { message }) => ({ ...state, message: message, loading: false })),
    on(UserProfileDetailActions.update, (state, { writerModel }) => ({ ...state, writerModel: writerModel, loading: true })),
    on(UserProfileDetailActions.initialize, (state,{currentId}) => ({ ...state, currentId: currentId, loading: true })),
);


