import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { of } from 'rxjs/observable/of'
import { Injectable } from '@angular/core'
import { App } from 'ionic-angular'
import * as UserActions from '../actions/user.actions'

import { AuthService } from '../../../providers/services/auth.service'
import { UserService } from '../../../providers/services/user.service'

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private userService: UserService
  ) {

  }



  //Get User Id
  @Effect()
  GetUserId$: Observable<Action> = this.action$
    .ofType(UserActions.GET_USER_ID)
    .exhaustMap(() => this.authService.getUser())
    .map((res) => new UserActions.GetUserIdSuccess(res))
    .catch(error => of(new UserActions.GetUserIdFailure(error)))


  //Get User Info
  @Effect()
  GetUserInfo$: Observable<Action> = this.action$
    .ofType(UserActions.GET_USER_INFO)
    .map((action: UserActions.GetUserInfo) => action.payload)
    .exhaustMap(userId => this.userService.getUser(userId))
    .map((res) => new UserActions.GetUserInfoSuccess(res))
    .catch(error => of(new UserActions.GetUserInfoFailure(error)))


  //Update User
  @Effect()
  UpdateUser$: Observable<Action> = this.action$
    .ofType(UserActions.UPDATE_USER)
    .map((action: UserActions.UpdateUser) => action.payload)
    .exhaustMap(data => this.userService.updateUser(data, data.userId))
    .map((res) => new UserActions.UpdateUserSuccess(res))
    .catch(error => of(new UserActions.UpdateUserFailure(error)))


}