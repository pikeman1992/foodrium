import { UniqueDeviceID } from '@ionic-native/unique-device-id'
import { NativeGeocoder } from '@ionic-native/native-geocoder'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation'
import { Device } from '@ionic-native/device'
import { Platform } from 'ionic-angular'

@Injectable()
export class DeviceService {

	constructor(
		private geolocation: Geolocation,
		private uniqueDeviceID: UniqueDeviceID,
		private device: Device,
		private nativeGeocoder: NativeGeocoder,
		private platform: Platform
	) {}

	getInfo() {
		return Observable.fromPromise(this.geolocation.getCurrentPosition())
			.flatMap(({coords}) => Observable.forkJoin([
				Promise.resolve(coords),
				this.nativeGeocoder.reverseGeocode(coords.latitude, coords.longitude),
				this.uniqueDeviceID.get(),
				this.toJSONDevice()
			]))
	}

	private toJSONDevice() {
		return Observable.create(observer => {
			const keys = Object.keys(this.device.constructor.prototype)
			const obj: any = keys.reduce((acc, cur) => {
				acc[cur] = this.device[cur]
				return acc
			}, {})
			obj.constructor = undefined
			obj.isVirtual = undefined

			observer.next(obj)
			observer.complete()
		})
	}
}