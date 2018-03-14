import { NgModule } from '@angular/core'
import { AuthService } from './auth.service'
import { DeviceService } from './device.service'
import { PostService } from './post.service'
import { UserService } from './user.service'

@NgModule({
	providers: [
		AuthService,
		DeviceService,
		PostService,
		UserService,
	],
})
export class ServicesModule { }