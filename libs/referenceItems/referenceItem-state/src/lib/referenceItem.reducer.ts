import {  createReducer, on } from '@ngrx/store';
import { INITIAL_QUERY, ReferenceItemComponentState } from './referenceItem.state';
import { ReferenceItemDetailActions, ReferenceItemListActions, ReferenceItemSearchListActions, ReferenceItemSearchbarActions, ReferenceItemServicesActions } from "./referenceItem.actions";




export const initialState: ReferenceItemComponentState = {
  pagedResult: null,
  readerModel: null,
  query: INITIAL_QUERY,
  loading: false,
  editMode: null,
  message: null,
  currentId: null,
  writerModel: null,
  referenceItemRoute: '',
  title: '',
  selectedItems: null
};


export const referenceItemReducer = createReducer(
  initialState,
  on(ReferenceItemSearchListActions.initialize, (state, { referenceItemRoute,title })=>({...state, referenceItemRoute:referenceItemRoute, title:title})),
  on(ReferenceItemListActions.updateOrders, (state, { query })=>({...state, query:query})),
  on(ReferenceItemListActions.add, (state)=>({...state,editMode:'ADD',currentId:null	})),
  on(ReferenceItemListActions.edit, (state,{ id })=>({...state,editMode:'UPDATE',loading:true,currentId:id})),
  on(ReferenceItemSearchbarActions.updateQuery, (state,  { query})=>({...state, query:query})),
  on(ReferenceItemDetailActions.add, (state, { writerModel } )=>({...state, writerModel:writerModel,loading:true})),
  on(ReferenceItemDetailActions.update, (state, { writerModel}  )=>({...state, writerModel:writerModel,loading:true})),
  on(ReferenceItemDetailActions.cancel, (state)=>({...state,editMode:null, referenceItemWriterModel:null})),
  on(ReferenceItemServicesActions.referenceItemAddSuccess, (state,{ message }) =>({...state,message:message,loading:false,editMode:null})),
  on(ReferenceItemServicesActions.referenceItemAddFail, (state, { message })=>({...state,message:message,loading:false})),
  on(ReferenceItemServicesActions.referenceItemGetByIdSuccess, (state,{ item })=>({...state,readerModel:item,loading:false})),
  on(ReferenceItemServicesActions.referenceItemGetByIdFail, (state,{ message })=>({...state,message:message,loading:false})),
  on(ReferenceItemServicesActions.referenceItemUpdateSuccess, (state,{ message })=>({...state,message:message,loading:false,editMode:null})),
  on(ReferenceItemServicesActions.referenceItemUpdateFail, (state,{ message })=>({...state,message:message,loading:false})),
  on(ReferenceItemServicesActions.referenceItemGetAllSuccess, (state,{ pagedResult })=>({...state,pagedResult:pagedResult,loading:false})),
  on(ReferenceItemServicesActions.referenceItemGetAllFail, (state,{ message })=>({...state,message:message,loading:false})),
  );

