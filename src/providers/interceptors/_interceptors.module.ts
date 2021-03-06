import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor } from './jwt.interceptor'
import { DEFAULT_TIMEOUT, defaultTimeout, TimeoutInterceptor } from './timeout.interceptor'

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true
		},
	],
})
export class InterceptorsModule {
}