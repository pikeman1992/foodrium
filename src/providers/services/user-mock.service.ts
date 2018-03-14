import { Injectable } from '@angular/core';
import users from './user-mock';

@Injectable()
export class UserService{
  getAll() {
    return Promise.resolve(users);
  }
  getById(id){
    return Promise.resolve(users[id - 1]);
  }
}