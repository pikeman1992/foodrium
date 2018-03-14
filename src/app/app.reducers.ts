import { authReducer } from '../pages/start/reducers/auth.reducer'
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { AppState } from './interface'
import { storeFreeze } from 'ngrx-store-freeze'
import { env } from '../environments/env'
import { storeLogger } from 'ngrx-store-logger'
import { deviceReducer } from '../pages/start/reducers/device.reducer'
import { postReducer } from '../pages/camera/reducers/post.reducer'
import { userReducer } from '../pages/user/reducers/user.reducers'

export const reducers: ActionReducerMap<AppState> = {
	auth: authReducer,
	post: postReducer,
	device: deviceReducer,
	user: userReducer,
}

export function logger(reducer: ActionReducer<AppState>): any {
	// default, no options
	return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = env.APP_ENV === 'development'
	? [logger, storeFreeze]
	: [];