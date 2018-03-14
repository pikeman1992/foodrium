import { AuthState } from '../pages/start/reducers/auth.reducer'
import { DeviceState } from '../pages/start/reducers/device.reducer'
import { PostState } from '../pages/camera/reducers/post.reducer'
import { UserState } from '../pages/user/reducers/user.reducers'

export interface AppState {
	auth: AuthState,
	device: DeviceState,
	post: PostState,
	user: UserState
}