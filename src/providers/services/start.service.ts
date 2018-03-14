// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Response } from '@angular/http';
// import { HttpService } from './http';
// import { AppState } from '../../app/interfaces';
// import { Store } from '@ngrx/store';
// import { StartActions } from '../../pages/start/actions/start.actions';


// @Injectable()
// export class StartService {

//   constructor(
//     private http: HttpService,
//     private actions: StartActions,
//     private store: Store<AppState>
//   ) {

//   }

//   login(data): Observable<any> {
//     return this.http.post(
//       'spree/login.json',
//       { spree_user: data }
//     ).map((res: Response) => {
//       data = res.json();
//       if (!data.error) {
//         this.setTokenInLocalStore(data);
//         this.store.dispatch(this.actions.loginSuccess());
//       } else {
//         this.http.loading.next({
//           loading: false,
//           hasError: true,
//           hasMsg: 'Please enter valid Credentials',
//         });
//       }
//       return data;
//     });
//   }

//   register(data): Observable<any> {
//     return this.http.post(
//       'api/account',
//       { spree_user: data }
//     ).map((res: Response) => {
//       data = res.json();
//       if (!data.errors) {
//         this.setTokenInLocalStore(res.json());
//         this.store.dispatch(this.actions.loginSuccess());
//       } else {
//         this.http.loading.next({
//           loading: false,
//           hasError: true,
//           hasMsg: 'Please enter valid Credentials'
//         });
//       }
//       return res.json();
//     });
//   }

//   authorized(): Observable<any> {
//     return this.http
//       .get('spree/api/v1/users')
//       .map((res: Response) => res.json());
//   }

//   logout(){
//     return this.http.get('spree/logout.json')
//       .map((res:Response)=>{
//         localStorage.removeItem('user');
//         this.store.dispatch(this.actions.logoutSuccess());
//         return res.json();
//       });
//   }

//   private setTokenInLocalStore(user_data): void {
//     const jsonData = JSON.stringify(user_data);
//     localStorage.setItem('user', jsonData);
//   }

// }