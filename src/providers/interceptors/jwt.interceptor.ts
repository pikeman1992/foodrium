import {
	HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
	HttpResponse,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { Injectable, Injector } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { env } from '../../environments/env'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	private authService: AuthService
	private started: number
	private _req: HttpRequest<any>

	constructor(private injector: Injector) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.authService = this.injector.get(AuthService)

		return this.transformRequest(req).flatMap((val: HttpRequest<any>) => {
			
			return next.handle(val)
				.do(this.doSuccess.bind(this), this.doError.bind(this))
				.catch(event => Observable.throw(event.error))
		})
	}

	private transformRequest(req: HttpRequest<any>) {
		return new Observable((observer) => {
			this.authService.getToken().then(token => {
				this.started = Date.now()

				this._req = req.clone({
					url: env.END_POINT + req.url,
				})

				if (token) {
					this._req = req.clone({
						setHeaders: {
							'X-ACCESS-TOKEN': token,
						},
					})
				}
				observer.next(this._req)
				observer.complete()
			})
		})
	}

	private doSuccess(event: any) {
		if (event instanceof HttpResponse) {
			const elapsed = Date.now() - this.started
			console.log(`%c ${this._req.method} for ${this._req.urlWithParams} took ${elapsed} ms.`, 'background: lime; color: white')
		}
	}

	private doError(event: any) {
		if (event instanceof HttpErrorResponse) {
			const elapsed = Date.now() - this.started
			console.log(`%c ${this._req.method} for ${this._req.urlWithParams} took ${elapsed} ms. with error`, 'background: tomato; color: white', event.error)
		}
	}
}