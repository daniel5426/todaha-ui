import {  inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { ChallengeDefinitionListActions, ChallengeDefinitionSearchbarActions, ChallengeDefinitionDetailActions, ChallengeDefinitionServicesActions } from './challengeDefinition.actions';
import { DeleteEndPointService,GetAllEndPointService,GetByIdEndPointService,PostEndPointService,PutEndPointService } from '@guppy/kodin/openapi';
import { Store, select } from '@ngrx/store';
import { selectCurrentIdValue } from './challengeDefinition.selectors';



export const updateOrders$ = createEffect(
  (actions$ = inject(Actions), getAllEndPointService = inject(GetAllEndPointService), store =  inject(Store)) => {
    return actions$.pipe(
      ofType(ChallengeDefinitionListActions.updateOrders),
      switchMap((query) =>
        getAllEndPointService.challengeDefinitionsGet(
          query.query.id,
          query.query.title,
          query.query.state,
          query.query.withLimit,
          query.query.levelId,
          query.query.skillsId,
          query.query.topicsId,
          query.query.page,
          query.query.limit,
          query.query.q,
          query.query.orders).pipe(
            map((result) => ChallengeDefinitionServicesActions.challengeDefinitionGetAllSuccess({ pagedResult:result })),
            catchError((error: { message:string, error:any }) =>
              of(ChallengeDefinitionServicesActions.challengeDefinitionGetAllFail({ message: {severity:'error', summary:'UPDATE_ORDERS_FAILED', detail:error.message } }))
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
      ofType(ChallengeDefinitionSearchbarActions.updateQuery),
      switchMap((query) =>
        getAllEndPointService.challengeDefinitionsGet(
          query.query.id,
          query.query.title,
          query.query.state,
          query.query.withLimit,
          query.query.levelId,
          query.query.skillsId,
          query.query.topicsId,
          query.query.page,
          query.query.limit,
          query.query.q,
          query.query.orders).pipe(
            map((result) => ChallengeDefinitionServicesActions.challengeDefinitionGetAllSuccess({ pagedResult:result  })),
            catchError((error: { message:string, error:any }) =>
              of(ChallengeDefinitionServicesActions.challengeDefinitionGetAllFail({ message: {severity:'error', summary:'UPDATE_QUERY_FAILED', detail:error.error } }))
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
      ofType(ChallengeDefinitionDetailActions.add),
      switchMap((writerModel) =>
        service.challengeDefinitionsPost(
          writerModel.writerModel).pipe(
            map((result) => ChallengeDefinitionServicesActions.challengeDefinitionAddSuccess( {message: { severity:'success', summary:'ADD_SUCCEED', detail:'ADD_SUCCEED' }})),
            catchError((error: {message:string, error:any}) =>
              of(ChallengeDefinitionServicesActions.challengeDefinitionAddFail({ message: {severity:'error', summary:'ADD_FAILED', detail:error.error } }))
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
      ofType(ChallengeDefinitionDetailActions.update),
      withLatestFrom(store.pipe(select(selectCurrentIdValue))),
      mergeMap(([writerModel,currentId]) =>
        service.challengeDefinitionsIdPut(
          currentId as string,
          writerModel.writerModel).pipe(
            map((result) => ChallengeDefinitionServicesActions.challengeDefinitionUpdateSuccess( {message: { severity:'success', summary:'UPDATE_SUCCEED', detail:'UPDATE_SUCCEED' }})),
            catchError((error: {message:string, error:any}) =>
              of(ChallengeDefinitionServicesActions.challengeDefinitionUpdateFail({message: {severity:'error', summary:'UPDATE_FAILED', detail:error.error } }))
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
      ofType(ChallengeDefinitionListActions.edit),
      withLatestFrom(store.pipe(select(selectCurrentIdValue))),
      mergeMap(([,challengeDefinitionRouteWithCurrentId]) =>
        service.challengeDefinitionsIdGet(
          challengeDefinitionRouteWithCurrentId as string).pipe(
            map((result) => ChallengeDefinitionServicesActions.challengeDefinitionGetByIdSuccess({ item:result })),
            catchError((error: { message:string, error:any }) =>
              of(ChallengeDefinitionServicesActions.challengeDefinitionUpdateFail({ message: {severity:'error', summary:error.message, detail:error.error }}))
            )
        )
      )
    );
  },
  { functional: true }
);




export class ChallengeDefinitionEffects {
  getById$ = edit$;
  update$ = update$;
  add$ = save$;
  updateQuery$ = updateQuery$;
  updateOrders$ = updateOrders$;
}
