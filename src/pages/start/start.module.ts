import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'

import { SignupPage } from './components/signup/signup'
import { LoginPage } from './components/login/login'

import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './effects/auth.effects'
import { DeviceEffects } from './effects/device.effects'
import { ForgotPasswordPage } from './components/forgot-password/forgot-password'

@NgModule({
	declarations: [
		SignupPage,
		LoginPage,
		ForgotPasswordPage
	],
	imports: [
		CommonModule,
		IonicModule,
		EffectsModule.forFeature([
			AuthEffects,
			DeviceEffects
		]),
	],
	entryComponents: [
		SignupPage,
		LoginPage,
		ForgotPasswordPage
	],
})
export class StartPageModule {
}
