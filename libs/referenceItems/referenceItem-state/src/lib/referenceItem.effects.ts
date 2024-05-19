import {  inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  of,
  withLatestFrom,
} from 'rxjs';
import { ReferenceItemListActions, ReferenceItemSearchbarActions, ReferenceItemDetailActions, ReferenceItemServicesActions } from './referenceItem.actions';
import { DeleteEndPointService,GetAllEndPointService,GetByIdEndPointService,PostEndPointService,PutEndPointService } from '@guppy/referenceItems/openapi';
import { Store, select } from '@ngrx/store';
import { selectReferenceItemRouteValue, selectReferenceItemRouteWithCurrentIdValue } from './referenceItem.selectors';



export const updateOrders$ = createEffect(
  (actions$ = inject(Actions), getAllEndPointService = inject(GetAllEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ReferenceItemListActions.updateOrders),
      withLatestFrom(store.pipe(select(selectReferenceItemRouteValue))),
      mergeMap(([query,referenceItemRoute]) =>
        getAllEndPointService.referenceItemRouteGet(
          referenceItemRoute,
          query.query.id,
          query.query.key,
          query.query.value,
          query.query.page,
          query.query.limit,
          query.query.q,
          query.query.orders).pipe(
            map((result) => ReferenceItemServicesActions.referenceItemGetAllSuccess({ pagedResult:result })),
            catchError((error: { message:string, error:any }) =>
              of(ReferenceItemServicesActions.referenceItemGetAllFail({ message: {severity:'error', summary:'UPDATE_ORDERS_FAILED', detail:error.message } }))
            )
        )
      )
    );
  },
  { functional: true }
);

export const updateQuery$ = createEffect(
  (actions$ = inject(Actions), getAllEndPointService = inject(GetAllEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ReferenceItemSearchbarActions.updateQuery),
      withLatestFrom(store.pipe(select(selectReferenceItemRouteValue))),
      mergeMap(([query,referenceItemRoute]) =>
        getAllEndPointService.referenceItemRouteGet(
          referenceItemRoute,
          query.query.id,
          query.query.key,
          query.query.value,
          query.query.page,
          query.query.limit,
          query.query.q,
          query.query.orders).pipe(
            map((result) => ReferenceItemServicesActions.referenceItemGetAllSuccess({ pagedResult:result  })),
            catchError((error: { message:string, error:any }) =>
              of(ReferenceItemServicesActions.referenceItemGetAllFail({ message: {severity:'error', summary:'UPDATE_QUERY_FAILED', detail:error.error } }))
            )
        )
      )
    );
  },
  { functional: true }
);

export const save$ = createEffect(
  (actions$ = inject(Actions), service = inject(PostEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ReferenceItemDetailActions.add),
      withLatestFrom(store.pipe(select(selectReferenceItemRouteValue))),
      mergeMap(([writerModel,referenceItemRoute]) =>
        service.referenceItemRoutePost(
          referenceItemRoute,
          writerModel.writerModel).pipe(
            map((result) => ReferenceItemServicesActions.referenceItemAddSuccess( {message: { severity:'success', summary:'ADD_SUCCEED', detail:'ADD_SUCCEED' }})),
            catchError((error: {message:string, error:any}) =>
              of(ReferenceItemServicesActions.referenceItemAddFail({ message: {severity:'error', summary:'ADD_FAILED', detail:error.error } }))
            )
        )
      )
    );
  },
  { functional: true }
);

export const update$ = createEffect(
  (actions$ = inject(Actions), service = inject(PutEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ReferenceItemDetailActions.update),
      withLatestFrom(store.pipe(select(selectReferenceItemRouteWithCurrentIdValue))),
      mergeMap(([writerModel,referenceItemRouteWithCurrentId]) =>
        service.referenceItemRouteIdPut(
          referenceItemRouteWithCurrentId.referenceItemRoute,
          referenceItemRouteWithCurrentId.currentId as string,
          writerModel.writerModel).pipe(
            map((result) => ReferenceItemServicesActions.referenceItemUpdateSuccess( {message: { severity:'success', summary:'UPDATE_SUCCEED', detail:'UPDATE_SUCCEED' }})),
            catchError((error: {message:string, error:any}) =>
              of(ReferenceItemServicesActions.referenceItemUpdateFail({message: {severity:'error', summary:'UPDATE_FAILED', detail:error.error } }))
            )
          )
      )
    );
  },
  { functional: true }
);




export const edit$ = createEffect(
  (actions$ = inject(Actions), service = inject(GetByIdEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ReferenceItemListActions.edit),
      withLatestFrom(store.pipe(select(selectReferenceItemRouteWithCurrentIdValue))),
      mergeMap(([,referenceItemRouteWithCurrentId]) =>
        service.referenceItemRouteIdGet(
          referenceItemRouteWithCurrentId.referenceItemRoute,
          referenceItemRouteWithCurrentId.currentId as string).pipe(
            map((result) => ReferenceItemServicesActions.referenceItemGetByIdSuccess({ item:result })),
            catchError((error: { message:string, error:any }) =>
              of(ReferenceItemServicesActions.referenceItemUpdateFail({ message: {severity:'error', summary:error.message, detail:error.error }}))
            )
        )
      )
    );
  },
  { functional: true }
);




export class ReferenceItemEffects {
  getById$ = edit$;
  update$ = update$;
  add$ = save$;
  updateQuery$ = updateQuery$;
  updateOrders$ = updateOrders$;
}
