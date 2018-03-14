import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { CameraPage } from './camera'

import { CDVPhotoLibraryPipe } from '../../providers/pipes/cdvphotolibrary.pipe'

import { WritePostPage } from './components/write-post/write-post'
import { GalleryPage } from './components/gallery/gallery'
import { TakePhotoPage } from './components/take-photo/take-photo'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { PostEffects } from './effects/post.effects'
import { EffectsModule } from '@ngrx/effects'

@NgModule({
	declarations: [
		CameraPage,
		WritePostPage,
		GalleryPage,
		TakePhotoPage,

		CDVPhotoLibraryPipe,
	],
	imports: [
		CommonModule,
		IonicModule,
		EffectsModule.forFeature([
			PostEffects
		]),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		CameraPage,
		WritePostPage,
		GalleryPage,
		TakePhotoPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	],
})
export class CameraModule {
}
