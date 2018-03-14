import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker,
} from '@ionic-native/google-maps'


@Component({
	selector: 'page-around',
	templateUrl: 'around.html',
})
export class AroundPage implements OnInit {

	map: GoogleMap

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private googleMaps: GoogleMaps) {

	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.loadMap();
	}

	// displayMap() {
	// 	const location = new google.maps.LatLng('17.3850044', '78.486671');

	// 	const options = {
	// 		center: location,
	// 		zoom: 10,
	// 	};

	// 	const map = new google.maps.Map(this.mapRef.nativeElement, options);

	// 	this.addMarker(location, map);
	// }

	// addMarker(position, map) {
	// 	return new google.maps.Marker({
	// 		position,
	// 		map
	// 	})
	// }

	loadMap() {
		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: 43.0741904,
					lng: -89.3809802
				},
				zoom: 18,
				tilt: 30
			}
		};

		this.map = GoogleMaps.create('map', mapOptions);

		// Wait the MAP_READY before using any methods.
		this.map.one(GoogleMapsEvent.MAP_READY)
			.then(() => {
				console.log('Map is ready!');

				// Now you can use all methods safely.
				this.map.addMarker({
					title: 'Ionic',
					icon: 'blue',
					animation: 'DROP',
					position: {
						lat: 43.0741904,
						lng: -89.3809802
					}
				})
					.then(marker => {
						marker.on(GoogleMapsEvent.MARKER_CLICK)
							.subscribe(() => {
								alert('clicked');
							});
					});

			});
	}
}

