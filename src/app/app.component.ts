import { Component } from '@angular/core'
import { NavController, Platform, App } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { LoginPage } from '../pages/start/components/login/login'
import { TabsPage } from '../pages/tabs/tabs'
import { LoadingPage } from '../pages/loading/loading'
import { AppState } from './interface'
import { Store } from '@ngrx/store'

import * as fromAuth from '../pages/start/reducers/auth.state'
import { Observable } from 'rxjs'
import { AuthService } from '../providers/services/auth.service'
import * as DeviceActions from '../pages/start/actions/device.actions'

// import { WritePostPage } from '../pages/camera/write-post/write-post';

@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	rootPage: any = LoadingPage

	constructor(platform: Platform,
	            statusBar: StatusBar,
	            splashScreen: SplashScreen,
	            private authService: AuthService,
	            private store: Store<AppState>,
	            public app: App) {

		this.store.dispatch(new DeviceActions.GetDeviceInfo())
		console.log('testtt')

		Promise.all([
			this.authService.getToken(),
			this.authService.getUser(),
			platform.ready(),
		]).then(vals => {

			statusBar.styleDefault()
			splashScreen.hide()

			if (!vals[0]) {
				this.rootPage = LoginPage
			} else {
				this.rootPage = TabsPage
			}
		})
	}

	ionViewDidLoad() {
		console.log('/////')
		this.store.dispatch(new DeviceActions.GetDeviceInfo())
	}
}
