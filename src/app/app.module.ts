import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
//Components
import { MyApp } from './app.component'
/*Plugin*/
import { Camera } from '@ionic-native/camera'
import { PhotoLibrary } from '@ionic-native/photo-library'
import { Geolocation } from '@ionic-native/geolocation'
import { UniqueDeviceID } from '@ionic-native/unique-device-id'
import { Device } from '@ionic-native/device'
import { NativeGeocoder, } from '@ionic-native/native-geocoder'
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer'
import { File } from '@ionic-native/file'

import { TabsPage } from '../pages/tabs/tabs'

import { StartPageModule } from '../pages/start/start.module'
//All tab
import { HomeModule } from '../pages/home/home.module'
import { UserModule } from '../pages/user/user.module'
import { ChatModule } from '../pages/chat/chat.module'
import { SearchModule } from '../pages/search/search.module'
import { NotificationModule } from '../pages/notification/notification.module'
import { CameraModule } from '../pages/camera/camera.module'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
//Modules
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProvidersModule } from '../providers/providers.module'
//Reducer
// adding rx operators
import 'rxjs'

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { metaReducers, reducers } from './app.reducers'
import { LoadingPageModule } from '../pages/loading/loading.module'
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage'
import { GoogleMaps } from '@ionic-native/google-maps'


@NgModule({
	declarations: [
		MyApp,
		TabsPage,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ProvidersModule,

		HomeModule,
		UserModule,
		ChatModule,
		SearchModule,
		NotificationModule,
		StartPageModule,
		CameraModule,
		LoadingPageModule,
		IonicStorageModule.forRoot(),

		StoreModule.forRoot(reducers, {metaReducers}),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		}),

		EffectsModule.forRoot([]),

		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		Camera,
		PhotoLibrary,
		Geolocation,
		UniqueDeviceID,
		Device,
		NativeGeocoder,
		GoogleMaps,
		FileTransfer,
		FileTransferObject,
		File,
	],
})
export class AppModule {
}
