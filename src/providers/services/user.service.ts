import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage'
//import { Http, Headers, RequestOptions } from '@angular/http';

import { IUser } from '../models/user'
import { AuthService } from './auth.service'
import { env } from '../../environments/env'

@Injectable()
export class UserService {

  constructor(private storage: Storage,
    private http: HttpClient,
    private authService: AuthService,
  ) {

  }


  //from server
  getUser(userId: string): Observable<any> {
    return this.http.get(env.END_POINT + `users/${userId}`)
  }

  updateUser(body: IUser, userId: string): Observable<any> {
    return this.http.patch(env.END_POINT + `users/${userId}`, body)
  }

}