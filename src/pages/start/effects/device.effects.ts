import { Actions, Effect } from '@ngrx/effects'
import * as DeviceActions from '../actions/device.actions'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { of } from 'rxjs/observable/of'
import { Injectable } from '@angular/core'
import { App } from 'ionic-angular'
import { DeviceService } from '../../../providers/services/device.service'
import * as AuthActions from '../actions/auth.actions'

@Injectable()
export class DeviceEffects {
	constructor(private actions$: Actions,
	            private deviceService: DeviceService,
	            public app: App) {
	}

	//Login effect
	@Effect()
	GetDeviceInfo$: Observable<Action> = this.actions$
		.ofType(DeviceActions.GET_DEVICE_INFO)
		.exhaustMap(() => this.deviceService.getInfo())
		.map((res) => new DeviceActions.GetDeviceInfoSuccess(res))
		.catch(error => of(new DeviceActions.GetDeviceInfoFailure(error)))
}