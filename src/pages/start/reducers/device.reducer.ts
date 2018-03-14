import * as DeviceActions from '../actions/device.actions'
import { Map, Record } from 'immutable'

export interface DeviceState extends Map<string, any> {
	data: any
	device: any
	error: any
	pending: boolean
}

export const DeviceStateRecord = Record({
	data: null,
	device: null,
	error: null,
	pending: false,
})

export const initialDeviceState: DeviceState = new DeviceStateRecord() as DeviceState

export function deviceReducer(state = initialDeviceState, action: DeviceActions.Actions): DeviceState {
	switch (action.type) {

		/**
		 * Get device info
		 */
		case DeviceActions.GET_DEVICE_INFO: {
			return state.merge({error: null, pending: true}) as DeviceState
		}

		case DeviceActions.GET_DEVICE_INFO_SUCCESS: {
			return state.merge({...action.payload, pending: false}) as DeviceState
		}

		case DeviceActions.GET_DEVICE_INFO_FAILURE: {
			return state.merge({error: action.payload, pending: false}) as DeviceState
		}

		default: {
			return state
		}
	}
}