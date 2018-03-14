import { Authenticate } from '../models/user'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Storage } from '@ionic/storage'
import { IUser } from '../models/user'

@Injectable()
export class AuthService {
	constructor(private storage: Storage, 
							private readonly http: HttpClient) {
	}

	getToken() {
		return this.storage.get('token')
	}

	setToken(token: string) {
		return this.storage.set('token', token)
	}

	//from local SQLife database
	getUser(): Promise<IUser> {
		return new Promise(resolve => {
			this.storage.get('user').then(user => resolve(JSON.parse(user)))
		})
	}

	setUser(user: any) {
		return this.storage.set('user', JSON.stringify(user))
	}

	clearStorage() {
		return this.storage.clear()
	}

	login(body: Authenticate): Observable<any> {
		return this.http.post('login', body)
	}

	logout(): Observable<any> {
		return Observable.create(observer => {
			observer.next(true)
			observer.complete()
		})
	}

	signup(body: Authenticate): Observable<any> {
		return this.http.post('signup', body)
	}

	forgotPassword(body: { email: string }): Observable<any> {
		//TODO: fix forgot-password to forgot-password when fixed on API
		return this.http.post('forgot-password', body)
	}
}