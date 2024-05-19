import {  createReducer, on } from '@ngrx/store';
import { INITIAL_QUERY, ChallengeDefinitionComponentState } from './challengeDefinition.state';
import { ChallengeDefinitionDetailActions, ChallengeDefinitionListActions, ChallengeDefinitionSearchbarActions, ChallengeDefinitionServicesActions } from "./challengeDefinition.actions";




export const initialState: ChallengeDefinitionComponentState = {
  pagedResult: null,
  readerModel: null,
  query: INITIAL_QUERY,
  loading: false,
  editMode: null,
  message: null,
  currentId: null,
  writerModel: null,
  title: '',
  selectedItems: null
};


export const challengeDefinitionReducer = createReducer(
  initialState,
  on(ChallengeDefinitionListActions.updateOrders, (state, { query })=>({...state, query:query})),
  on(ChallengeDefinitionListActions.add, (state)=>({...state,editMode:'ADD',currentId:null	})),
  on(ChallengeDefinitionListActions.edit, (state,{ id })=>({...state,editMode:'UPDATE',loading:true,currentId:id})),
  on(ChallengeDefinitionSearchbarActions.updateQuery, (state,  { query})=>({...state, query:query})),
  on(ChallengeDefinitionDetailActions.add, (state, { writerModel } )=>({...state, writerModel:writerModel,loading:true})),
  on(ChallengeDefinitionDetailActions.update, (state, { writerModel}  )=>({...state, writerModel:writerModel,loading:true})),
  on(ChallengeDefinitionDetailActions.cancel, (state)=>({...state,editMode:null, challengeDefinitionWriterModel:null})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionAddSuccess, (state,{ message }) =>({...state,message:message,loading:false,editMode:null})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionAddFail, (state, { message })=>({...state,message:message,loading:false})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionGetByIdSuccess, (state,{ item })=>({...state,readerModel:item,loading:false})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionGetByIdFail, (state,{ message })=>({...state,message:message,loading:false})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionUpdateSuccess, (state,{ message })=>({...state,message:message,loading:false,editMode:null})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionUpdateFail, (state,{ message })=>({...state,message:message,loading:false})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionGetAllSuccess, (state,{ pagedResult })=>({...state,pagedResult:pagedResult,loading:false})),
  on(ChallengeDefinitionServicesActions.challengeDefinitionGetAllFail, (state,{ message })=>({...state,message:message,loading:false})),
  );

