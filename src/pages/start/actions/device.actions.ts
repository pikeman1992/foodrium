import { Action } from '@ngrx/store'

export const GET_DEVICE_INFO = '[Start] Get Device Info'
export const GET_DEVICE_INFO_SUCCESS = '[Start] Get Device Info Success'
export const GET_DEVICE_INFO_FAILURE = '[Start] Get Device Info Failure'

/**
 * get device info
 */

export class GetDeviceInfo implements Action {
	readonly type = GET_DEVICE_INFO
}

export class GetDeviceInfoSuccess implements Action {
	readonly type = GET_DEVICE_INFO_SUCCESS

	constructor(public payload: any) {
	}
}

export class GetDeviceInfoFailure implements Action {
	readonly type = GET_DEVICE_INFO_FAILURE

	constructor(public payload: any) {
	}
}


export type Actions =
	| GetDeviceInfo
	| GetDeviceInfoSuccess
	| GetDeviceInfoFailure;