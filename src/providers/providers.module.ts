import { NgModule } from '@angular/core'

import { ServicesModule } from './services/_services.module'
import { InterceptorsModule } from './interceptors/_interceptors.module'


@NgModule({
	declarations: [],
	exports: [],
	imports: [
		ServicesModule,
		InterceptorsModule,
	],
	providers: [],
})

export class ProvidersModule {
}