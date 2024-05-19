import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { GetByIdEndPointService, PutEndPointService } from '@guppy/identities/openapi';
import { UserProfileDetailActions, UserProfileServicesActions } from './userProfile.actions';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCurrentIdValue } from './userProfile.selectors';


export const get$  = createEffect(
  (actions$ = inject(Actions), getByIdEndPointService = inject(GetByIdEndPointService)) => {
    return actions$.pipe(
      ofType(UserProfileDetailActions.initialize),
      switchMap((id) =>{
        console.log(id.currentId);
        return getByIdEndPointService.usersIdGet(id.currentId).pipe(
          map((result) => UserProfileServicesActions.currentUserGetSuccess({ user: result })),
          catchError((error: { message: string, error: any }) =>
            of(UserProfileServicesActions.currentUserGetFail({ message: {severity:'error', summary:'GET_FAILED', detail:error.error } }))
          )
        );
      }

      )
    );
  },
  {functional: true}
)

export const update$ = createEffect(
  (store = inject(Store),actions$ = inject(Actions), putEndPointService = inject(PutEndPointService)) => {
    return actions$.pipe(
      ofType(UserProfileDetailActions.update),
      withLatestFrom(store.pipe(select(selectCurrentIdValue))),
      mergeMap(([writerModel,currentId]) =>
        putEndPointService.usersIdPut(currentId as string, writerModel.writerModel).pipe(
          map(() => UserProfileServicesActions.currentUserUpdateSuccess({ message: { severity:'success', summary:'UPDATE_SUCCEED', detail:'UPDATE_SUCCEED' } })),
          catchError((error: { message: string, error: any }) =>
            of(UserProfileServicesActions.currentUserUpdateFail({ message:{severity:'error', summary:'UPDATE_FAILED', detail:error.error } }))
          )
        )
      )
    );
  },
  {functional: true}
)

export class UserProfileEffects {
  get$ = get$;
  update$ = update$;

}

